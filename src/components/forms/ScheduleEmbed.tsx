import { useEffect } from 'react';
import { BOOKING } from '@/config/booking';

export default function ScheduleEmbed() {
  useEffect(() => {
    if (window.Calendly) {
      window.Calendly.initBadgeWidget({
        url: BOOKING.calendlyUrl,
        text: 'Schedule a call',
        color: '#2C5F6E',
      });
    }
  }, []);

  return (
    <div className="py-12 text-center">
      <p className="text-gray-600">Loading schedule...</p>
    </div>
  );
}
