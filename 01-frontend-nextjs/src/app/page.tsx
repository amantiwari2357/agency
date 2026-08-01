import LandingHeroSection from '@/components/page-sections/LandingHeroSection';
import ProductFeaturesSection from '@/components/page-sections/ProductFeaturesSection';
import ServiceOfferingsSection from '@/components/page-sections/ServiceOfferingsSection';
import TechnologyStackSection from '@/components/page-sections/TechnologyStackSection';
import CallToActionSection from '@/components/page-sections/CallToActionSection';
import LocationTrendingCountriesSection from '@/components/location/LocationTrendingCountriesSection';
import ContactEnquiryForm from '@/components/contact/ContactEnquiryForm';
import ArticleBlogSection from '@/components/articles/ArticleBlogSection';
import SEOContent from '@/components/seo/SEOContent';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <main className="flex-1">
        <LandingHeroSection />
        <LocationTrendingCountriesSection />
        <ProductFeaturesSection />
        <ServiceOfferingsSection />
        <TechnologyStackSection />
        <ArticleBlogSection />
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
                <p className="text-xl text-gray-600 mb-6">
                  Fill out the enquiry form and our team will get back to you within 24 hours with a customized solution for your business.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Quick Response</h3>
                      <p className="text-sm text-gray-600">24-hour response time guaranteed</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">💡</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Expert Consultation</h3>
                      <p className="text-sm text-gray-600">Free consultation with our experts</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Global Presence</h3>
                      <p className="text-sm text-gray-600">Serving clients in 24+ countries</p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactEnquiryForm />
            </div>
          </div>
        </section>
        <CallToActionSection />
        <SEOContent page="home" />
      </main>
    </div>
  );
}
