import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Clock3, Pill, ShieldPlus, Truck } from 'lucide-react';
import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import SectionHeader from '../components/SectionHeader';
import MedicineCard from '../components/MedicineCard';
import PackageCard from '../components/PackageCard';
import SkeletonCard from '../components/SkeletonCard';
import { getHealthPackages, getMedicines } from '../services/api';

const stats = [
  { label: 'Verified medicines', value: '2,500+' },
  { label: 'Fast delivery slots', value: '30 min' },
  { label: 'Support availability', value: '24/7' },
];

const categoryHighlights = [
  { name: 'Pain Relief', icon: Pill, description: 'Headache, fever, and quick symptom relief' },
  { name: 'Diabetes', icon: ShieldPlus, description: 'Daily glucose care essentials and refills' },
  { name: 'Vitamins', icon: Truck, description: 'Nutrition support and energy boosters' },
  { name: 'Heart Care', icon: Clock3, description: 'Routine cardiovascular wellness support' },
];

function LandingPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [featuredMedicines, setFeaturedMedicines] = useState([]);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPageData() {
      setLoading(true);
      const [medicines, packageData] = await Promise.all([getMedicines(), getHealthPackages()]);
      setFeaturedMedicines(medicines.filter((item) => item.featured).slice(0, 4));
      setPackages(packageData.slice(0, 2));
      setLoading(false);
    }

    loadPageData();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/medicines?search=${encodeURIComponent(search)}`);
  };

  return (
    <div>
      <section className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white bg-hero-grid p-8 shadow-card sm:p-12">
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-brand-100/60 blur-3xl" />
            <div className="absolute bottom-0 right-24 h-36 w-36 rounded-full bg-accent-100/70 blur-3xl" />
            <div className="relative max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-700">
                Pharmacy ordering website
              </p>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-slate-900 sm:text-6xl">
                Healthcare essentials with a cleaner, faster checkout experience.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Search medicines, upload prescriptions, manage repeat orders, and explore curated
                health packages from one modern dashboard.
              </p>

              <div className="mt-8 max-w-xl">
                <SearchBar
                  onChange={(event) => setSearch(event.target.value)}
                  onSubmit={handleSearch}
                  placeholder="Search for paracetamol, vitamins, diabetes care..."
                  value={search}
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link className="button-primary" to="/medicines">
                  Shop Medicines
                </Link>
                <Link className="button-secondary" to="/upload-prescription">
                  Upload Prescription
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-slate-100 bg-white/80 p-4">
                    <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="glass-panel p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-700">
                Why patients prefer this
              </p>
              <div className="mt-6 space-y-4">
                {[
                  'Smart prescription flow with upload placeholder',
                  'Card-based browsing for medicines and care packages',
                  'Clean blue and green healthcare visual language',
                ].map((point) => (
                  <div key={point} className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel overflow-hidden bg-gradient-to-br from-brand-600 to-accent-600 p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">Promotional offer</p>
              <h2 className="mt-4 font-display text-3xl font-semibold">
                Free delivery on wellness bundles this week.
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/80">
                Combine vitamins, hydration, and chronic care essentials in one monthly shipment.
              </p>
              <Link
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-brand-700 transition hover:-translate-y-0.5"
                to="/loyalty-packages"
              >
                View packages
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-shell">
          <SectionHeader
            description="Explore fast-moving categories designed for everyday wellness and long-term care."
            eyebrow="Categories"
            title="Popular care categories"
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {categoryHighlights.map((item) => (
              <Link
                key={item.name}
                className="glass-panel group flex min-h-48 flex-col justify-between p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-soft"
                to={`/medicines?category=${encodeURIComponent(item.name)}`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft">
                  <item.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="mt-8 text-2xl font-semibold text-slate-900">{item.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-shell">
          <SectionHeader
            action={
              <Link className="button-secondary" to="/medicines">
                View full catalogue
              </Link>
            }
            description="Featured medicines selected from our demo catalogue. These use local mock data for now."
            eyebrow="Featured medicines"
            title="Shop trusted essentials"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {loading
              ? Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />)
              : featuredMedicines.map((medicine) => <MedicineCard key={medicine.id} medicine={medicine} />)}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-shell">
          <SectionHeader
            action={
              <Link className="button-secondary" to="/loyalty-packages">
                See all packages
              </Link>
            }
            description="Curated packages for wellness, chronic care, and proactive health routines."
            eyebrow="Health packages"
            title="Promotional wellness bundles"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {packages.map((item) => (
              <PackageCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
