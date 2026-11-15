import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}


// Cumalative layout shift is a metrics used by Google to evaluate the performace and uer experience of website
// With fonts, what happens
//   layout shift happnes
// why
//  the browser initially renders
//  text in a fallback or system font and then swaps it out for a custom font it has loaded
// this swap can cause the text size, spacing, ro layout to change, shifting elements around
// Next JS automatically optimizes font in the application when you use the next/font module.
// it downloads fonts files at the build time and host them with other static assets. 
// This means when a user visites your application, there are no additional networt request for fonts
// which would impact performancxe


// Jose is asking for Adding primary font
// Okay, just added two fonts

// Jose is asking to add image:
// Let's do it
//  if you add image manually, you will have to do follwings:
// 1 ensure image is responsive on different screen
// 2 specıfy images sizes for different devices
// 3 Prevent layout sift as the image loads
// 4 lazy load images that are outside the user's viewport

// Image Optimization is the large topic in web development that could be considered a specialization,
// on itself.

// instead of manual implementing those optimization, you can use next/image component to automatically
// optimize your images

// The <image> compoent is an extension of HTML <img> tag a dn come with automatic img optimization, 
// such as
//  previing layout shift,  when img are loading
//  Resiziing images to avoid shipping large image to defices with small viewport
//  Lazyloading images by default
//  Serving images in morden formats, like WebP and AVIF, when the browser supports it


