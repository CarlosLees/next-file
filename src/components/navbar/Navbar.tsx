import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
            <Link href="/" className="flex items-center gap-4">
                <Image
                    src="/icons/logo.png"
                    alt="Zoom Project"
                    width={40}
                    height={40}
                    className="max-sm:size-10 bg-blue-300 rounded-lg"
                />
                <p className="text-[26px] font-extrabold text-white max-sm:hidden">File Manager</p>
            </Link>
        </nav>
    );
};

export default Navbar;
