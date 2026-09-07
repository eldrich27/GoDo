import type { Filter } from '../types';

interface FilterBarProps {
  filter: Filter;
  onChange: (filter: Filter) => void;
}

const filters: Filter[] = ['all', 'active', 'completed'];

export function FilterBar({ filter, onChange }: FilterBarProps) {
  return (
    <div>
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          disabled={f === filter}
        >
          {f}
        </button>
      ))}
    </div>
  );
}