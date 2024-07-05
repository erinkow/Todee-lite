'use client';

import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { List } from '@prisma/client';
import { ListItem } from './list-item';
import { ElementRef, useEffect, useRef, useState } from 'react';
import { ListForm } from './list-form';
import { Plus } from 'lucide-react';
import { useOnClickOutside } from 'usehooks-ts';
import { Button } from '@/components/ui/button';
import { ListProvider, useListContext } from './list-context';
import { useAction } from '@/hooks/use-action';
import { updateListOrder } from '@/action/update-list-order';
import { toast } from 'sonner';
import { useParams } from 'next/navigation';

interface ListContainerProps {
  data: List[];
}

export const ListContainer = ({ data }: ListContainerProps) => {
  return (
    <ListProvider>
      <div>
        <Content data={data} />
      </div>
    </ListProvider>
  );
};

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

const Content = ({ data }: { data: List[] }) => {
  const { isEditing, enableEditing, disableEditing } = useListContext();
  const [orderedData, setOrderedData] = useState(data);
  const params = useParams();

  const boardId = params.boardId as string;

  const { execute } = useAction(updateListOrder, {
    onSuccess: () => {
      toast.success('List re-ordered');
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  const onDragEnd = (result: any) => {
    const { destination, source, type } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (type === 'list') {
      const items = reorder(orderedData, source.index, destination.index).map(
        (item, index) => ({ ...item, order: index })
      );

      setOrderedData(items);
      execute({
        items,
        boardId,
      });
    }
  };
  return (
    <div className='w-[310px] max-w-md p-4 shadow-lg rounded-lg h-[40rem] md:h-[55rem] lg:h-[40rem] 2xl:h-[44rem] flex flex-col bg-neutral-100'>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='lists' type='list' direction='vertical'>
          {(provided) => (
            <ol
              {...provided.droppableProps}
              ref={provided.innerRef}
              className='flex flex-col roun items-center justify-start overflow-y-auto flex-grow'
            >
              <div className='p-[8px] 2xl:p-[40px]'>
                {orderedData?.map((item, index) => (
                  <ListItem key={item.id} data={item} index={index} />
                ))}
              </div>
            </ol>
          )}
        </Droppable>
      </DragDropContext>
      <div className='flex-shrink-0 mt-4'>
        {isEditing ? (
          <ListForm />
        ) : (
          <Button
            onClick={enableEditing}
            variant='ghost'
            className='flex items-center justify-center w-full'
          >
            <Plus className='w-4 h-4 mr-2' /> <span>Add List</span>
          </Button>
        )}
      </div>
    </div>
  );
};
