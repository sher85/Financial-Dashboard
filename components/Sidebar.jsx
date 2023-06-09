import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineHome } from 'react-icons/ai';
import { RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

const Sidebar = ({ children }) => {
	return (
		<div className="flex">
			{/* Sidebar */}
			<div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
				<div className="flex flex-col items-center">
					<Link href="/">
						<div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
							<AiOutlineHome size={20} />
						</div>
					</Link>
					<span className="border-b-[1.5px] border-gray-100 w-full p-2"></span>
					{/* Dashboard */}
					<Link href="/">
						<div className="bg-gray-200 hover:bg-gray-300 cursor-pointer my-4 p-3 rounded-lg inline-block">
							<RxDashboard size={20} />
						</div>
					</Link>
					{/* Person */}
					<Link href="/customers">
						<div className="bg-gray-200 hover:bg-gray-300 cursor-pointer my-4 p-3 rounded-lg inline-block">
							<RxPerson size={20} />
						</div>
					</Link>
					{/* Orders */}
					<Link href="/orders">
						<div className="bg-gray-200 hover:bg-gray-300 cursor-pointer my-4 p-3 rounded-lg inline-block">
							<HiOutlineShoppingBag size={20} />
						</div>
					</Link>
					{/* Settings */}
					<Link href="/settings">
						<div className="bg-gray-200 hover:bg-gray-300 cursor-pointer my-4 p-3 rounded-lg inline-block">
							<FiSettings size={20} />
						</div>
					</Link>
				</div>
			</div>
			{/* Main Page */}
			<main className="ml-20 w-full">{children}</main>
		</div>
	);
};

export default Sidebar;
