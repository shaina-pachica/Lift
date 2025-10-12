'use client';

import * as React from 'react';

import useUser from '@/features/auth/useUser';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  CreditCard,
  Dumbbell,
  LayoutDashboard,
  Settings,
  UserCheck,
  Users,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Members',
      url: '/members',
      icon: Users,
    },
    {
      title: 'Check-In',
      url: '/check-in',
      icon: UserCheck,
    },
    {
      title: 'Payments',
      url: '/payments',
      icon: CreditCard,
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const currentUser = useUser();
  const user = currentUser ?? { name: 'Guest', email: 'guest@example.com' };
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className=" flex aspect-square size-8 items-center justify-center rounded-lg">
                <Dumbbell className="!size-8" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-bold">LIFT</span>
                <span className="truncate text-xs">Gym Mangement</span>
              </div>
              <NavLink to="/dashboard" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{ ...user, avatar: '/avatars/shadcn.jpg' }} />
      </SidebarFooter>
    </Sidebar>
  );
}
