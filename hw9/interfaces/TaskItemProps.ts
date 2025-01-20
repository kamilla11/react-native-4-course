import Task from '../modals/Task.ts';

export default interface TaskItemProps {
    item: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}
