import { COMPANY } from '@/config/site';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <Phone className="h-6 w-6 text-brand-accent flex-shrink-0" />
        <div>
          <h3 className="font-semibold">Phone</h3>
          <a href={`tel:${COMPANY.phoneRaw}`} className="text-gray-600 hover:text-brand-primary">
            {COMPANY.phone}
          </a>
        </div>
      </div>
      <div className="flex gap-4">
        <Mail className="h-6 w-6 text-brand-accent flex-shrink-0" />
        <div>
          <h3 className="font-semibold">Email</h3>
          <a href={`mailto:${COMPANY.email}`} className="text-gray-600 hover:text-brand-primary">
            {COMPANY.email}
          </a>
        </div>
      </div>
      <div className="flex gap-4">
        <MapPin className="h-6 w-6 text-brand-accent flex-shrink-0" />
        <div>
          <h3 className="font-semibold">Address</h3>
          <p className="text-gray-600">
            {COMPANY.address.street}<br />
            {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
          </p>
        </div>
      </div>
    </div>
  );
}
