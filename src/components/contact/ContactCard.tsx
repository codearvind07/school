interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'blue' | 'green' | 'purple' | 'yellow';
  action?: {
    label: string;
    href: string;
  };
}

const colorClasses = {
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    hover: 'hover:bg-blue-600',
    border: 'border-blue-200',
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-600',
    hover: 'hover:bg-green-600',
    border: 'border-green-200',
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    hover: 'hover:bg-purple-600',
    border: 'border-purple-200',
  },
  yellow: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-600',
    hover: 'hover:bg-yellow-600',
    border: 'border-yellow-200',
  },
};

export default function ContactCard({ icon, title, description, color, action }: ContactCardProps) {
  const colors = colorClasses[color];

  return (
    <div className={`group bg-white p-4 sm:p-6 rounded-xl border ${colors.border} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
      <div className="flex items-start space-x-4">
        <div className={`${colors.bg} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
          <div className={colors.text}>{icon}</div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
          {action && (
            <a
              href={action.href}
              className={`inline-flex items-center mt-4 text-sm font-semibold ${colors.text} hover:underline`}
            >
              {action.label}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}