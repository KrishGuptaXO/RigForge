import { Search, Bell, ShoppingCart, CircleUser } from 'lucide-react';

export default function Header(){
    return (
        <header className='flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#0D1117]'>
            { /* Left */}
            <div>
                <h1 className='text-2xl font-bold text-white'>
                    Good Morning, Krish 👋🏼
                </h1>
                
                <p className='text-sm text-zinc-400'>
                    Welcome to RigSmith
                </p>
            </div>
            
            {/* Right */}
            <div className='flex items-center gap-4'>

                <button className='p-2 rounded-lg hover:bg-zinc-800 transition'>
                    <Search size={20} />
                </button>

                <button className='p-2 rounded-lg hover:bg-zinc-800 transition'>
                    <Bell size={20} />
                </button>

                <button className='p-2 rounded-lg hover:bg-zinc-800 transition'>
                    <ShoppingCart size={20} />
                </button>

                <button className='p-2 rounded-lg hover:bg-zinc-800 transition'>
                    <CircleUser size={20} />
                </button>
            </div>
        </header>
    );
}