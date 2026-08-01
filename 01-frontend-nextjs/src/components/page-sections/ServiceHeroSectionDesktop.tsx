import { Home, MessageSquare, GraduationCap, ShoppingBag, Server, Search } from 'lucide-react';

const iconMap: Record<string, any> = {
  Home,
  MessageSquare,
  GraduationCap,
  ShoppingBag,
  Server,
  Search,
};

interface ServiceHeroSectionProps {
  iconName: string;
  badge: string;
  title: string;
  description: string;
  features?: Array<{
    title: string;
    description: string;
  }>;
}

export default function ServiceHeroSectionDesktop({
  iconName,
  badge,
  title,
  description,
  features
}: ServiceHeroSectionProps) {
  const Icon = iconMap[iconName] || Home;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 rounded-3xl border border-gray-200">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <div className="flex items-center space-x-3 text-blue-600 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs font-extrabold uppercase tracking-widest">
            {badge}
          </span>
        </div>

        <h1 className="text-5xl font-black text-gray-900 mb-4">
          {title}
        </h1>

        <p className="text-gray-600 text-base max-w-3xl leading-relaxed">
          {description}
        </p>

        {features && features.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mb-2">
                  <Icon className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="font-bold text-sm text-gray-900">{feature.title}</h3>
                <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
