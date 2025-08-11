
'use client';

import { useState, useMemo } from 'react';

interface EvacuationCenter {
  id: string;
  name: string;
  address: string;
  city: string;
  lat: number;
  lng: number;
  capacity: number;
  facilities: string[];
  type: 'School' | 'Covered Court' | 'Private Building' | 'Government Building' | 'Open Space' | 'Purpose-built Evacuation Center';
}

interface EvacuationListProps {
  userLocation: { lat: number; lng: number };
}

export default function EvacuationList({ userLocation }: EvacuationListProps) {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(5);

  const evacuationCenters: EvacuationCenter[] = [
   {
    id: '1',
    name: 'Awihao Covered Court',
    address: 'AWIHAO, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.334263,
    lng: 123.619015,
    capacity: 50,
    facilities: ['Sealed', 'Comfort Room', 'Child Friendly Space', 'Women Friendly Space'],
    type: 'Covered Court'
  },
  {
    id: '2',
    name: 'Awihao Elementary School',
    address: 'AWIHAO, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.331964,
    lng: 123.620499,
    capacity: 50,
    facilities: ['FFPs Storage', 'Sealed', 'Comfort Room', 'Potable Water', 'Health Station', 'Women Friendly Space', 'Child Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '3',
    name: 'Awihao National Highschool',
    address: 'AWIHAO, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.336442,
    lng: 123.617147,
    capacity: 75,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space','Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board' ],
    type: 'School'
  },
  {
    id: '4',
    name: 'Bagakay Elementary School',
    address: 'BAGAKAY, Purok 1, Toledo City',
    city: 'Toledo City',
    lat: 10.358139,
    lng: 123.737887,
    capacity: 50,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space','Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board' ],
    type: 'School'
  },
  {
    id: '5',
    name: 'Bato Cockpit Arena',
    address: 'BATO, Sitio Lahotay, Toledo City',
    city: 'Toledo City',
    lat: 10.337547,
    lng: 123.592115,
    capacity: 20,
    facilities: ['Sealed,', 'Comfort Room', 'Potable Water',],
    type: 'Private Building'
  },
  {
    id: '6',
    name: 'Bato Covered Court',
    address: 'BATO, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.341287,
    lng: 123.591183,
    capacity: 20,
    facilities: ['Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space',],
    type: 'Covered Court'
  },
  {
    id: '7',
    name: 'Bato Elementary School',
    address: 'BATO, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.340643,
    lng: 123.590885,
    capacity: 100,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water',  'Health Station', 'Child Friendly Space','Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '8',
    name: 'Bato National Highschool',
    address: 'BATO, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.339256,
    lng: 123.591057,
    capacity: 300,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space','Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '9',
    name: 'Biga Elementary School',
    address: 'BIGA, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.348710,
    lng: 123.731643,
    capacity: 200,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space','Women Friendly Space', 'Prayer Room', 'Community Kitchen', 'Info Board'],
    type: 'School'
  },
  {
    id: '10',
    name: 'Bulongan Covered Court',
    address: 'BULONGAN, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.313429,
    lng: 123.653843,
    capacity: 50,
    facilities: ['Sealed,', 'Comfort Room'],
    type: 'Covered Court'
  },
  {
    id: '11',
    name: 'HHCR Multi-Purpose Building',
    address: 'BUNGA, Purok 5, Toledo City',
    city: 'Toledo City',
    lat: 10.302259,
    lng: 123.685226,
    capacity: 20,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space','Women Friendly Space', 'Ramp(PWDs)'],
    type: 'Government Building'
  },
  {
    id: '12',
    name: 'Multi-Purpose Building',
    address: 'BUNGA, Purok 5, Toledo City',
    city: 'Toledo City',
    lat: 10.302259,
    lng: 123.685226,
    capacity: 15,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space','Women Friendly Space', 'Ramp(PWDs)'],
    type: 'Government Building'
  },
  {
    id: '13',
    name: 'Bunga Elementary School',
    address: 'BUNGA, Purok 5, Toledo City',
    city: 'Toledo City',
    lat: 10.303191,
    lng: 123.685472,
    capacity: 150,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space','Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '14',
    name: 'Fulgencio Dolino Elementary School',
    address: 'CABITOONAN, Sitio Crossing, Toledo City',
    city: 'Toledo City',
    lat: 10.352655,
    lng: 123.613142,
    capacity: 200,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space','Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '15',
    name: 'Dolino Complex',
    address: 'CABITOONAN, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.356852,
    lng: 123.613188,
    capacity: 200,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Community Kitchen', 'Ramp(PWDs)'],
    type: 'Covered Court'
  },
  {
    id: '16',
    name: 'Calong-Calong Covered Court',
    address: 'CALONG-CALONG, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.419242,
    lng: 123.667353,
    capacity: 30,
    facilities: ['Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space'],
    type: 'Covered Court'
  },
  {
    id: '17',
    name: 'Calong-Calong Elementary School (Lowland)',
    address: 'CALONG-CALONG, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.420297,
    lng: 123.669702,
    capacity: 30,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '18',
    name: 'Calong-Calong Elementary School (Upland)',
    address: 'CALONG-CALONG, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.420297,
    lng: 123.669702,
    capacity: 60,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '19',
    name: 'Cambang-ug Elementary School',
    address: 'CAMBANG-UG, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.364412,
    lng: 123.699427,
    capacity: 70,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '20',
    name: 'Upper Campo 8 Elementary School',
    address: 'CAMPO 8, Upper Campo 8, Toledo City',
    city: 'Toledo City',
    lat: 10.322332,
    lng: 123.759307,
    capacity: 10,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  
      {
    id: '21',
    name: 'Lower Campo 8 Elementary School',
    address: 'CAMPO 8, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.313404,
    lng: 123.756659,
    capacity: 70,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '22',
    name: 'Canlumampao Elementary School',
    address: 'CANLUMAMPAO, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.366832,
    lng: 123.675481,
    capacity: 100,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '23',
    name: 'Cantabaco Covered Court',
    address: 'CANTABACO, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.307157,
    lng: 123.728665,
    capacity: 300,
    facilities: ['Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '24',
    name: 'Cantabaco Elementary School',
    address: 'CANTABACO, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.307076,
    lng: 123.729991,
    capacity: 300,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space',],
    type: 'School'
  },
  {
    id: '25',
    name: 'Cantabaco National Highschool',
    address: 'CANTABACO, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.308141,
    lng: 123.722304,
    capacity: 300,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '26',
    name: 'Capt. Claudio Elementary School',
    address: 'CAPT.CLAUDIO, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.400653,
    lng: 123.685595,
    capacity: 80,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '27',
    name: 'Carmen Multi-Purpose Hall',
    address: 'CARMEN, Purok 3, Toledo City',
    city: 'Toledo City',
    lat: 10.393108,
    lng: 123.663436,
    capacity: 100,
    facilities: ['Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'Government Building'
  },
  {
    id: '28',
    name: 'Carmen Elementary School',
    address: 'CARMEN, Purok3, Toledo City',
    city: 'Toledo City',
    lat: 10.392324,
    lng: 123.663433,
    capacity: 240,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Ramp(PWDs)'],
    type: 'School'
  },
  {
    id: '29',
    name: 'Senior Citizen\'s Office',
    address: 'DAANLUNGSOD, Purok 4, Toledo City',
    city: 'Toledo City',
    lat: 10.393233,
    lng: 123.652804,
    capacity: 100,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'Government Building'
  },
  {
    id: '30',
    name: 'SK Office',
    address: 'DAANLUNGSOD, Purok 3, Toledo City',
    city: 'Toledo City',
    lat: 10.393233,
    lng: 123.652804,
    capacity: 25,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Ramp(PWDs)'],
    type: 'Government Building'
  },
  {
    id: '31',
    name: 'Youth Development Training Center',
    address: 'DAANLUNGSOD, Purok 3, Toledo City',
    city: 'Toledo City',
    lat: 10.393233,
    lng: 123.652804,
    capacity: 25,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Ramp(PWDs)'],
    type: 'Government Building'
  },
  {
    id: '32',
    name: 'Daanlungsod Covered Court',
    address: 'DAANLUNGSOD, Purok 4, Toledo City',
    city: 'Toledo City',
    lat: 10.393233,
    lng: 123.652804,
    capacity: 100,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Ramp(PWDs)'],
    type: 'Covered Court'
  },
  {
    id: '33',
    name: 'CCC Staff Club',
    address: 'DAS, CCC Compound, Toledo City',
    city: 'Toledo City',
    lat: 10.313544,
    lng: 123.704286,
    capacity: 50,
    facilities: ['Sealed,', 'Comfort Room', 'Child Friendly Space', 'Women Friendly Space'],
    type: 'Private Building'
  },
  {
    id: '34',
    name: 'CCC Recreation Center',
    address: 'DAS, CCC Compound, Toledo City',
    city: 'Toledo City',
    lat: 10.311321,
    lng: 123.708866,
    capacity: 375,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Ramp(PWDs)'],
    type: 'Private Building'
  },
  {
    id: '35',
    name: 'DAS Covered Court',
    address: 'DAS, Purok DAS CC, Toledo City',
    city: 'Toledo City',
    lat: 10.308742,
    lng: 123.708976,
    capacity: 625,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Ramp(PWDs)'],
    type: 'Covered Court'
  },
  {
    id: '36',
    name: 'DAS Elementary School',
    address: 'DAS, Purok Uncrona, Toledo City',
    city: 'Toledo City',
    lat: 10.306384,
    lng: 123.711610,
    capacity: 80,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '37',
    name: 'DAS National Highschool',
    address: 'DAS, Purok Uncrona, Toledo City',
    city: 'Toledo City',
    lat: 10.306770,
    lng: 123.712554,
    capacity: 40,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '38',
    name: 'Gen. P. Del Rosario Elementary School',
    address: 'DAS, Purok Dasuga, Toledo City',
    city: 'Toledo City',
    lat: 10.305690,
    lng: 123.703861,
    capacity: 88,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '39',
    name: 'De Lasalle Andres Soriano Memorial College',
    address: 'DAS, Purok Acra, Toledo City',
    city: 'Toledo City',
    lat: 10.309834,
    lng: 123.710408,
    capacity: 375,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '40',
    name: 'Dumlog Elementary School',
    address: 'DUMLOG, Purok Avocado, Toledo City',
    city: 'Toledo City',
    lat: 10.393848,
    lng: 123.652858,
    capacity: 50,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '41',
    name: 'General Climaco Covered Court',
    address: 'GEN.CLIMACO, Casoy 1, Toledo City',
    city: 'Toledo City',
    lat: 10.372617,
    lng: 123.716104,
    capacity: 100,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'Covered Court'
  },
  {
    id: '42',
    name: 'Ibo Elementary School',
    address: 'IBO, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.365421,
    lng: 123.619253,
    capacity: 50,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '43',
    name: 'Ilihan Basketball Court',
    address: 'ILIHAN, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.382496,
    lng: 123.659016,
    capacity: 200,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'Open Space'
  },
  {
    id: '44',
    name: 'Jacinta Lariosa Elementary School',
    address: 'ILIHAN, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.379187,
    lng: 123.657782,
    capacity: 150,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '45',
    name: 'Toledo National Vocational School',
    address: 'ILIHAN, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.383112,
    lng: 123.657693,
    capacity: 1500,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '46',
    name: 'Landahan Elementary School',
    address: 'LANDAHAN, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.347966,
    lng: 123.650112,
    capacity: 40,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '47',
    name: 'Loay Elementary School',
    address: 'LOAY, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.328441,
    lng: 123.760468,
    capacity: 50,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '48',
    name: 'Luray II Covered Court',
    address: 'LURAY II, Purok Lamakan, Toledo City',
    city: 'Toledo City',
    lat: 10.382011,
    lng: 123.643909,
    capacity: 300,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'Covered Court'
  },
  {
    id: '49',
    name: 'North City Central School',
    address: 'LURAY II, Toledo City',
    city: 'Toledo City',
    lat: 10.380809,
    lng: 123.643076,
    capacity: 300,
    facilities: ['Sealed,', 'Comfort Room', 'Child Friendly Space', 'Women Friendly Space',],
    type: 'School'
  },
  {
    id: '50',
    name: 'Magdugo Elementary School',
    address: 'MAGDUGO, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.349479,
    lng: 123.667179,
    capacity: 30,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board' ],
    type: 'School'
  },
    {
    id: '51',
    name: 'Magdugo National Highschool',
    address: 'MAGDUGO, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.348814,
    lng: 123.668421,
    capacity: 100,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '52',
    name: 'Maiingit Covered Court',
    address: 'MAIINGIT, Purok 5, Toledo City',
    city: 'Toledo City',
    lat: 10.446748,
    lng: 123.681056,
    capacity: 100,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'Covered Court'
  },
  {
    id: '53',
    name: 'Maiingit Elementary School',
    address: 'MAIINGIT, Purok 6, Toledo City',
    city: 'Toledo City',
    lat: 10.447342,
    lng: 123.683153,
    capacity: 70,
    facilities: ['Sealed,', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space',],
    type: 'School'
  },
  {
    id: '54',
    name: 'Matab-ang Elementary School',
    address: 'MATAB-ANG, Sitio Proper, Toledo City',
    city: 'Toledo City',
    lat: 10.433418,
    lng: 123.671000,
    capacity: 100,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '55',
    name: 'Matab-ang National Highschool',
    address: 'MATAB-ANG, Sitio Cajuntic, Toledo City',
    city: 'Toledo City',
    lat: 10.424596,
    lng: 123.672073,
    capacity: 100,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '56',
    name: 'Media Once Elementary School',
    address: 'MEDIA ONCE, Sitio Lower, Toledo City',
    city: 'Toledo City',
    lat: 10.329148,
    lng: 123.674860,
    capacity: 700,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '57',
    name: 'Media Once National Highschool',
    address: 'MEDIA ONCE, Sitio Baud, Toledo City',
    city: 'Toledo City',
    lat: 10.337596,
    lng: 123.675118,
    capacity: 400,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '59',
    name: 'SSS Building',
    address: 'POBLACION, Purok Kalubihan, Toledo City',
    city: 'Toledo City',
    lat: 10.383719,
    lng: 123.64144,
    capacity: 50,
    facilities: ['FFPs Storage', 'Sealed,', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'Private Building'
  },
  {
    id: '60',
    name: 'Consolatrix College Toledo City',
    address: 'POBLACION, Magsaysay Hills, Toledo City',
    city: 'Toledo City',
    lat: 10.374075,
    lng: 123.636868,
    capacity: 100,
    facilities: ['FFPs storage', 'Sealed', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Ramp(PWDs)'],
    type: 'School'
  },
  {
    id: '61',
    name: 'University Of the Visayas Toledo City',
    address: 'Osmeña Street, Poblacion, Toledo City',
    city: 'Toledo City',
    lat: 10.376493,
    lng: 123.637259,
    capacity: 700,
    facilities: ['FFPs storage', 'Sealed', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen','Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '62',
    name: 'University Of the Visayas',
    address: 'Osmeña Street, Poblacion, Toledo City',
    city: 'Toledo City',
    lat: 10.374849,
    lng: 123.638190,
    capacity: 700,
    facilities: ['FFPs storage', 'Sealed', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen', 'Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '63',
    name: 'Barba Sports Complex',
    address: 'Poblacion, Toledo City',
    city: 'Toledo City',
    lat: 10.375445,
    lng: 123.634824,
    capacity: 500,
    facilities: ['FFPs storage', 'Sealed', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen', 'Ramp(PWDs)', 'Info Board'],
    type: 'Covered Court'
  },
  {
    id: '64',
    name: 'Toledo City Evacuation Center',
    address: 'Sitio Tunnel, Barangay Poblacion, Toledo City',
    city: 'Toledo City',
    lat: 10.369533,
    lng: 123.647820,
    capacity: 60,
    facilities: ['FFPs storage', 'Sealed', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Ramp(PWDs)', 'Info Board'],
    type: 'Purpose-built Evacuation Center'
  },
  {
    id: '65',
    name: 'Poog Multi-Purpose Covered Court',
    address: 'Sitio Proper, Poog, Toledo City',
    city: 'Toledo City',
    lat: 10.322516,
    lng: 123.685034,
    capacity: 50,
    facilities: ['FFPs storage', 'Compost Pit', 'Sealed', 'Comfort Room', 'Potable Water', 'Laundry Space', 'Child Friendly Space', 'Women Friendly Space', 'Couple Room', 'Prayer Room', 'Community Kitchen', 'Wash Facility/Water Source', 'Ramp(PWDs)', 'Help Desk', 'Info Board'],
    type: 'Covered Court'
  },
  {
    id: '66',
    name: 'Poog Elementary School',
    address: 'Sitio Proper, Poog, Toledo City',
    city: 'Toledo City',
    lat: 10.322672,
    lng: 123.688011,
    capacity: 50,
    facilities: ['FFPs storage', 'Sealed', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '67',
    name: 'Puting-Bato Covered Court',
    address: 'Purok Sentro, Puting-Bato, Toledo City',
    city: 'Toledo City',
    lat: 10.377461,
    lng: 123.687868,
    capacity: 100,
    facilities: ['FFPs storage', 'Sealed', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen', 'Ramp(PWDs)', 'Info Board'],
    type: 'Covered Court'
  },
  {
    id: '68',
    name: 'Puting-Bato Elementary School',
    address: 'Purok Sentro, Puting-Bato, Toledo City',
    city: 'Toledo City',
    lat: 10.376302,
    lng: 123.686797,
    capacity: 38,
    facilities: ['Sealed', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '69',
    name: 'Sagay Elementary School',
    address: 'Sitio Proper, Sagay, Toledo City',
    city: 'Toledo City',
    lat: 10.321152,
    lng: 123.638631,
    capacity: 90,
    facilities: ['FFPs storage', 'Sealed', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen', 'Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '70',
    name: 'Sam-ang Elementary School',
    address: 'Sitio Sinsin, Sam-ang, Toledo City',
    city: 'Toledo City',
    lat: 10.335760,
    lng: 123.660056,
    capacity: 35,
    facilities: ['FFPs storage', 'Sealed', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen', 'Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '71',
    name: 'Sangi Covered Court',
    address: 'Purok Caimito, Sangi, Toledo City',
    city: 'Toledo City',
    lat: 10.387060,
    lng: 123.652122,
    capacity: 150,
    facilities: ['FFPs storage', 'Sealed', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen', 'Ramp(PWDs)', 'Info Board'],
    type: 'Covered Court'
  },
  {
    id: '72',
    name: 'Sangi Elementary School',
    address: 'Purok Caimito, Sangi, Toledo City',
    city: 'Toledo City',
    lat: 10.386579,
    lng: 123.652648,
    capacity: 100,
    facilities: ['FFPs storage', 'Sealed', 'Comfort Room', 'Potable Water', 'Health Station', 'Child Friendly Space', 'Women Friendly Space', 'Prayer Room', 'Community Kitchen', 'Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '73',
    name: 'Senior Citizen Building',
    address: 'Purok Santol, Subayon, Toledo City',
    city: 'Toledo City',
    lat: 10.346452,
    lng: 123.632691,
    capacity: 20,
    facilities: ['FFPs storage', 'Sealed', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Ramp(PWDs)', 'Info Board'],
    type: 'Government Building'
  },
  {
    id: '74',
    name: 'Subayon Elementary School',
    address: 'Purok Santol, Subayon, Toledo City',
    city: 'Toledo City',
    lat: 10.345659,
    lng: 123.632071,
    capacity: 80,
    facilities: ['FFPs storage', 'Sealed', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '75',
    name: 'Talavera Covered Court',
    address: 'Purok 3, Talavera, Toledo City',
    city: 'Toledo City',
    lat: 10.410015,
    lng: 123.663666,
    capacity: 200,
    facilities: ['FFPs storage', 'Sealed', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Ramp(PWDs)', 'Info Board'],
    type: 'Covered Court'
  },
  {
    id: '76',
    name: 'Talavera Elementary School',
    address: 'Purok 4, Talavera, Toledo City',
    city: 'Toledo City',
    lat: 10.412260,
    lng: 123.666666,
    capacity: 300,
    facilities: ['Sealed', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Ramp(PWDs)',],
    type: 'School'
  },
  {
    id: '77',
    name: 'Tubod Elementary School',
    address: 'Sitio Proper, Tubod, Toledo City',
    city: 'Toledo City',
    lat: 10.364941,
    lng: 123.636563,
    capacity: 200,
    facilities: ['FFPs storage', 'Sealed', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Ramp(PWDs)', 'Info Board'],
    type: 'School'
  },
  {
    id: '78',
    name: 'Tungkay Elementary School',
    address: 'Tungkay, Toledo City',
    city: 'Toledo City',
    lat: 10.410321,
    lng: 123.786951,
    capacity: 80,
    facilities: ['FFPs storage', 'Sealed', 'Comfort Room', 'Potable Water', 'Child Friendly Space', 'Women Friendly Space', 'Ramp(PWDs)', 'Info Board'],
    type: 'School'
  }
  ];

  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
      const R = 6371;
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLng = (lng2 - lng1) * Math.PI / 180;
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    };
  
    const centersWithDistance = useMemo(() => {
      return evacuationCenters
        .map(center => ({
          ...center,
          distance: calculateDistance(userLocation.lat, userLocation.lng, center.lat, center.lng)
        }))
        .sort((a, b) => a.distance - b.distance);
    }, [userLocation]);
  
    const filteredCenters = useMemo(() => {
      if (selectedType === 'all') return centersWithDistance;
      return centersWithDistance.filter(center => center.type === selectedType);
    }, [centersWithDistance, selectedType]);
  
    const getTypeIcon = (type: string) => {
      switch (type) {
        case 'School': return 'ri-school-line';
        case 'Covered Court': return 'ri-basketball-line';
        case 'Private Building': return 'ri-building-line';
        case 'Government Building': return 'ri-government-line';
        case 'Open Space': return 'ri-open-line';
        case 'Purpose-built Evacuation Center': return 'ri-map-pin-user-line';
        default: return 'ri-building-line';
      }
    };
  
    const getDirectionsUrl = (lat: number, lng: number, name: string) => {
      return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${encodeURIComponent(name)}`;
    };
  
    const handleLoadMore = () => {
      setVisibleCount(prevCount => prevCount + 5); // Increase by 5 or 8 as needed
    };
  
    return (
      <div className="px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Your existing UI code for filters and current location */}
          
          <div className="space-y-4">
            {filteredCenters.slice(0, visibleCount).map((center, index) => (
              <div key={center.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="w-10 h-10 flex items-center justify-center bg-red-100 rounded-lg">
                      <i className={`${getTypeIcon(center.type)} text-red-600`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">{center.name}</h3>
                      <p className="text-gray-600 text-sm mb-1">{center.address}</p>
                      <p className="text-gray-500 text-sm">{center.city}</p>
                    </div>
                  </div>
                  {index === 0 && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full whitespace-nowrap">
                      Nearest
                    </span>
                  )}
                </div>
  
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-route-line"></i>
                    </div>
                    <span>{center.distance.toFixed(1)} km away</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-user-line"></i>
                    </div>
                    <span>{center.capacity} capacity</span>
                  </div>
                </div>
  
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Available Facilities:</p>
                  <div className="flex flex-wrap gap-1">
                    {center.facilities.map((facility, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded whitespace-nowrap"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>
  
                <div className="flex space-x-3">
                  <a
                    href={getDirectionsUrl(center.lat, center.lng, center.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-red-600 text-white text-center py-2 px-4 rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap"
                  >
                    <i className="ri-navigation-line mr-2"></i>
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
  
          {filteredCenters.length === 0 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-4">
                <i className="ri-map-pin-2-line text-2xl text-gray-400"></i>
              </div>
              <p className="text-gray-500">No evacuation centers found for the selected type.</p>
            </div>
          )}
  
          {visibleCount < filteredCenters.length && (
            <div className="text-center mt-4">
              <button
                onClick={handleLoadMore}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }