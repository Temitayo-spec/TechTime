import audio from '@/public/images/audio.png';
import live from '@/public/images/live.png';
import record from '@/public/images/record.png';
import notes from '@/public/images/notes.png';
import experienced_mentors from '@/public/images/experienced_mentors.png';
import time from '@/public/images/time.png';
import meetings from '@/public/images/meetings.png';
import price from '@/public/images/price.png';

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

export const BigCardData = [
  {
    image: experienced_mentors,
    bigText: 'Experienced Mentors',
    text: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.',
  },
  {
    image: time,
    bigText: 'Flexible Timings',
    text: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.',
  },
  {
    image: meetings,
    bigText: 'One-on-One Meetings',
    text: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.',
  },
  {
    image: price,
    bigText: 'Affordable Prices',
    text: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.',
  },
] as const;
