import LayoutCRMWrapper from '@/components/customer-relationship-management/LayoutCRMWrapper';
import CustomersCRMDashboard from '@/components/customer-relationship-management/CustomersCRMDashboard';

export default function CRMCustomersPage() {
  return (
    <LayoutCRMWrapper>
      <CustomersCRMDashboard />
    </LayoutCRMWrapper>
  );
}
