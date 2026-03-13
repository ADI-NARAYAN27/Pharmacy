import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import medicines from '../data/medicines.json';
import SearchBar from '../components/SearchBar';
import SectionHeader from '../components/SectionHeader';
import CategoryPill from '../components/CategoryPill';
import MedicineCard from '../components/MedicineCard';
import SkeletonCard from '../components/SkeletonCard';
import { getMedicines } from '../services/api';

const categories = ['All', ...new Set(medicines.map((medicine) => medicine.category))];

function MedicineListingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');
  const [loading, setLoading] = useState(true);
  const [medicineList, setMedicineList] = useState([]);

  useEffect(() => {
    setSearch(searchParams.get('search') || '');
    setActiveCategory(searchParams.get('category') || 'All');
  }, [searchParams]);

  useEffect(() => {
    async function loadMedicines() {
      setLoading(true);
      const data = await getMedicines({
        search: searchParams.get('search') || '',
        category: searchParams.get('category') || 'All',
      });
      setMedicineList(data);
      setLoading(false);
    }

    loadMedicines();
  }, [searchParams]);

  const selectedCategoryTitle = activeCategory === 'All' ? 'All medicines' : `${activeCategory} medicines`;

  const updateSearchParams = (nextSearch, nextCategory) => {
    const params = {};

    if (nextSearch) {
      params.search = nextSearch;
    }

    if (nextCategory && nextCategory !== 'All') {
      params.category = nextCategory;
    }

    setSearchParams(params);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    updateSearchParams(search, activeCategory);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    updateSearchParams(search, category);
  };

  return (
    <div className="container-shell space-y-8">
      <section className="glass-panel p-6 sm:p-8">
        <SectionHeader
          description="Search, filter by category, and browse the 20-item mock medicine catalogue."
          eyebrow="Medicine listing"
          title="Find the right medicine quickly"
        />

        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <SearchBar compact onChange={(event) => setSearch(event.target.value)} onSubmit={handleSearchSubmit} value={search} />
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <CategoryPill
                active={activeCategory === category}
                key={category}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </CategoryPill>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">{selectedCategoryTitle}</h2>
            <p className="mt-1 text-sm text-slate-500">
              {loading ? 'Loading medicines...' : `${medicineList.length} results found`}
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => <SkeletonCard key={index} />)
            : medicineList.map((medicine) => <MedicineCard key={medicine.id} medicine={medicine} />)}
        </div>

        {!loading && medicineList.length === 0 && (
          <div className="glass-panel mt-6 p-10 text-center">
            <h3 className="text-2xl font-semibold text-slate-900">No medicines matched your search</h3>
            <p className="mt-3 text-slate-600">
              Try a broader search term or clear the category filter to see more results.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default MedicineListingPage;
