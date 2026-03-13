import { Search } from 'lucide-react';

function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder = 'Search medicines, brands, wellness products...',
  compact = false,
}) {
  return (
    <form className="relative" onSubmit={onSubmit}>
      <Search
        className={`absolute left-4 top-1/2 -translate-y-1/2 text-brand-500 ${
          compact ? 'h-4 w-4' : 'h-5 w-5'
        }`}
      />
      <input
        className={`input-field pr-28 ${compact ? 'py-3 pl-11 text-sm' : 'py-4 pl-12 text-base'}`}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      <button
        className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-slate-900 px-4 font-semibold text-white transition hover:bg-brand-600 ${
          compact ? 'py-2 text-sm' : 'py-2.5 text-sm'
        }`}
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
