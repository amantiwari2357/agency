import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ServiceBackLinkProps {
  countryCode: string;
}

export default function ServiceBackLink({ countryCode }: ServiceBackLinkProps) {
  return (
    <div className="pt-2">
      <Link
        href={`/${countryCode}`}
        className="inline-flex items-center text-xs font-semibold text-gray-600 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Main Landing
      </Link>
    </div>
  );
}
