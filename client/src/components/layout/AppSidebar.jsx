import {Cpu, SavePlus, PackageOpen, Cog, House, PanelRight} from 'lucide-react';
import { Sidebar as ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';

export default function AppSidebar ({collapsed, toggleSidebar}) {
    return (
        <aside className='w-64 h-screen border-r border-zinc-800 bg-[#0D1117]'>
            <div className='p-6 text-2xl font-bold'>
                RigSmith
            </div>
        <ProSidebar collapsed={collapsed} 
            rootStyles={{
                backgroundColor: "#0D1117",
                borderRight: "1px solid #27272a",
            }}
        >
            <Menu>
                <MenuItem icon={<PanelRight />} onClick={toggleSidebar} >
                    {collapsed ? "" : "☰"}
                </MenuItem>

                <MenuItem icon = {<House size={20} />} component={<NavLink to="/" />} >
                    Home
                </MenuItem>

                <MenuItem icon = {<Cpu size={20} />} component={<NavLink to="/build" />} >
                    Build PC
                </MenuItem>

                <MenuItem icon = {<SavePlus size={20} />} component={<NavLink to="/saved-builds" />} >
                    Saved Builds
                </MenuItem>

                <MenuItem icon = {<PackageOpen size={20} />} component={<NavLink to="/orders" />} >
                    Orders
                </MenuItem>

                <MenuItem icon = {<Cog size={20} />} component={<NavLink to="/settings" />} >
                    Settings
                </MenuItem>
                
            </Menu>
        </ProSidebar>
        </aside>
    );
}