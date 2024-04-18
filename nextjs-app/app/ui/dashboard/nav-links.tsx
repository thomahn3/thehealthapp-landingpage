{/* The liks for all the pages in the application */}
'use clinet' ;

import {
   RectangleGroupIcon,
   CubeTransparentIcon,
   ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

{/* Defining the objects required to differntiate between the different link destinations */}
const links = [
    {name: 'Dashboard', href: '/dashboard', icon: RectangleGroupIcon},
    {name: 'The Weight Room', href: '/dashboard/weightroom', icon: CubeTransparentIcon},
    {name: 'The Kitchen', href: '/dashboard/kitchen', icon: ArrowTrendingUpIcon},
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx('flex h-[48px] grow items-center justify center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                        {
                            'bg-sky-100 text-blue-600' : pathname == link.href //Highlight blue if current link matches the navigation category's link

                        },
                        )}
                    >
                        <LinkIcon className='w-6' />
                    <p className='hidden md:block'>{link.name}</p>
                    </Link>
                );  
            })}
        </>
    );
}