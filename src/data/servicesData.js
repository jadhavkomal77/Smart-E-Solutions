import { Camera, Lock, Printer, Projector, Wifi, Monitor } from 'lucide-react';

export const services = [
  {
    id: 'cctv-surveillance',
    icon: Camera,
    title: 'CCTV Surveillance',
    description: 'Advanced surveillance systems with HD cameras, night vision, remote monitoring, and cloud storage solutions.',
    features: ['HD Quality', 'Remote Access', 'Motion Detection', '24/7 Recording'],
    gradient: 'from-blue-600 to-blue-700',
  },
  {
    id: 'digital-locks',
    icon: Lock,
    title: 'Digital Locks',
    description: 'Smart lock systems with biometric, PIN, and card access. Enhance security with keyless entry solutions.',
    features: ['Biometric', 'PIN Access', 'Remote Control', 'Auto Lock'],
    gradient: 'from-gray-700 to-gray-900',
  },
  {
    id: 'printers-scanners',
    icon: Printer,
    title: 'Printers & Scanners',
    description: 'Wide range of printers and scanners for offices. High-speed, reliable, and cost-effective solutions.',
    features: ['High Speed', 'Multi-function', 'Wireless', 'Cloud Print'],
    gradient: 'from-blue-700 to-blue-900',
  },
  {
    id: 'projectors',
    icon: Projector,
    title: 'Projectors',
    description: 'Professional projectors for presentations, home theater, and educational purposes with crystal clear display.',
    features: ['Full HD', 'Long Lamp Life', 'Portable', 'Wireless Connect'],
    gradient: 'from-gray-800 to-black',
  },
  {
    id: 'network-solutions',
    icon: Wifi,
    title: 'Network Solutions',
    description: 'Complete networking infrastructure setup with routers, switches, and wireless solutions for seamless connectivity.',
    features: ['High Speed', 'Secure', 'Scalable', 'Reliable'],
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    id: 'it-equipment',
    icon: Monitor,
    title: 'IT Equipment',
    description: 'Comprehensive IT equipment supply including computers, monitors, accessories, and peripheral devices.',
    features: ['Latest Tech', 'Warranty', 'Support', 'Installation'],
    gradient: 'from-gray-700 to-black',
  },
];
