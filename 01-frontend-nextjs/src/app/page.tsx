import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect to US country page as default
  redirect('/countries/us');
}
