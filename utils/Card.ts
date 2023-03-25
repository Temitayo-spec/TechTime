import audio from '@/public/images/audio.png';
import live from '@/public/images/live.png';
import record from '@/public/images/record.png';
import notes from '@/public/images/notes.png';

export const TopData = [
  {
    image: audio,
    text: 'Audio Classes',
  },
  {
    image: live,
    text: 'Live Classes',
  },
] as const;

export const BottomData = [
  {
    image: record,
    text: 'Recorded Classes',
  },
  {
    image: notes,
    text: '50+ Notes',
  },
] as const;
