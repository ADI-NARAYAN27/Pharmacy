import { Award, Gift, Sparkles } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import PackageCard from '../components/PackageCard';
import healthPackages from '../data/healthPackages';

const loyaltyHighlights = [
  { icon: Award, title: '850 points', description: 'Available points balance for your next reward.' },
  { icon: Gift, title: 'Monthly perks', description: 'Enjoy discounted bundles and free delivery drops.' },
  { icon: Sparkles, title: 'Priority support', description: 'Fast access to refill reminders and care alerts.' },
];

function LoyaltyPackagesPage() {
  return (
    <div className="container-shell space-y-8">
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel bg-gradient-to-br from-brand-600 to-accent-600 p-8 text-white sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">Loyalty program</p>
          <h1 className="mt-5 font-display text-4xl font-semibold">Care rewards built around repeat health needs</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/85">
            Reward frequent orders, unlock free delivery, and bundle preventive wellness packages for
            a smoother monthly refill experience.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {loyaltyHighlights.map((item) => (
            <div key={item.title} className="glass-panel p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-50 text-accent-700">
                <item.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          description="Choose from curated health and wellness bundles available in the frontend demo."
          eyebrow="Packages"
          title="Wellness packages"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {healthPackages.map((item) => (
            <PackageCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default LoyaltyPackagesPage;
