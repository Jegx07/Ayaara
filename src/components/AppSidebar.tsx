import React from "react";
import {
  LayoutDashboard,
  Brain,
  TrendingUp,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  GraduationCap,
  Users,
  Wifi,
  Heart,
  Map,
  MessageCircle
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
// Tooltip imports removed as tooltips are not used in the simplified sidebar

interface SidebarLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const studentLinks: SidebarLink[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Skill Assessment",
    href: "/skills",
    icon: Brain,
  },
  {
    label: "Career Assistant",
    href: "/career",
    icon: TrendingUp,
  },
  {
    label: "AI Chatbot",
    href: "/chatbot",
    icon: MessageCircle,
  },
  {
    label: "Career Path",
    href: "/career-path",
    icon: Map,
  },
  {
    label: "IoT Devices",
    href: "/iot",
    icon: Wifi,
  },
  {
    label: "Mental Support",
    href: "/mental-support",
    icon: Heart,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User,
  },
];

const professorLinks: SidebarLink[] = [
  {
    label: "Professor Dashboard",
    href: "/professor",
    icon: LayoutDashboard,
  },
  {
    label: "Students Overview",
    href: "/professor/students",
    icon: Users,
  },
  {
    label: "Skills Management",
    href: "/professor/skills",
    icon: TrendingUp,
  },
  {
    label: "Reports & Insights",
    href: "/professor/reports",
    icon: Settings,
  },
];

const commonLinks: SidebarLink[] = [
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    label: "Sign Out",
    href: "/auth",
    icon: LogOut,
  },
];

interface AppSidebarProps {
  userRole?: "student" | "professor";
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export function AppSidebar({ userRole = "student", isCollapsed, setIsCollapsed }: AppSidebarProps) {
  const location = useLocation();

  const links = userRole === "professor" ? professorLinks : studentLinks;

  const isActive = (path: string) => location.pathname === path;

  const Logo = () => (
    <div className="flex items-center gap-3 px-4 py-4 border-b border-sidebar-border">
      <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
        {userRole === "professor" ? (
          <GraduationCap className="w-5 h-5 text-white" />
        ) : (
          <Brain className="w-5 h-5 text-white" />
        )}
      </div>
      <div className={cn(
        "transition-all duration-300 overflow-hidden",
        isCollapsed ? "lg:w-0 lg:opacity-0" : "lg:w-auto lg:opacity-100"
      )}>
        <h2 className="font-bold text-lg whitespace-nowrap">MotiTrack</h2>
        <p className="text-xs text-muted-foreground capitalize whitespace-nowrap">{userRole} Portal</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-card border shadow-md"
      >
        {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
      </button>

      {/* Hover Trigger for Auto-Hide */}
      <div
        className="fixed left-0 top-0 bottom-0 w-2 z-40"
        onMouseEnter={() => setIsCollapsed(false)}
      />

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 flex flex-col h-screen transition-transform duration-300 bg-sidebar border-r border-sidebar-border",
          isCollapsed ? "w-64 -translate-x-full" : "w-64 translate-x-0"
        )}
        style={{ zIndex: 1000 }}
        onMouseLeave={() => setIsCollapsed(true)}
      >
        {/* Logo */}
        <Logo />

        {/* Navigation Links */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {links.map((link) => {
            const active = isActive(link.href);
            const IconComponent = link.icon;

            const linkContent = (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  active
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                    : "text-sidebar-foreground"
                )}
              >
                <IconComponent className="w-5 h-5 flex-shrink-0" />
                <span className={cn(
                  "transition-all duration-300 overflow-hidden whitespace-nowrap",
                  isCollapsed ? "lg:w-0 lg:opacity-0" : "lg:w-auto lg:opacity-100"
                )}>
                  {link.label}
                </span>
                {link.badge && (
                  <span className="ml-auto bg-primary/10 text-primary text-xs px-1.5 py-0.5 rounded-md">
                    {link.badge}
                  </span>
                )}
              </Link>
            );

            return isCollapsed ? (
              <div key={link.href} title={link.label}>
                {linkContent}
              </div>
            ) : linkContent;
          })}
        </nav>

        {/* Common Links */}
        <div className="px-3 py-4 border-t border-sidebar-border space-y-1">
          {commonLinks.map((link) => {
            const IconComponent = link.icon;

            const linkContent = (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground"
                )}
              >
                <IconComponent className="w-5 h-5 flex-shrink-0" />
                <span className={cn(
                  "transition-all duration-300 overflow-hidden whitespace-nowrap",
                  isCollapsed ? "lg:w-0 lg:opacity-0" : "lg:w-auto lg:opacity-100"
                )}>
                  {link.label}
                </span>
              </Link>
            );

            return isCollapsed ? (
              <div key={link.href} title={link.label}>
                {linkContent}
              </div>
            ) : linkContent;
          })}
        </div>

        {/* User Profile */}
        <div className="px-3 py-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
              {userRole === "professor" ? (
                <GraduationCap className="w-4 h-4 text-white" />
              ) : (
                <User className="w-4 h-4 text-white" />
              )}
            </div>
            <div className={cn(
              "transition-all duration-300 overflow-hidden",
              isCollapsed ? "lg:w-0 lg:opacity-0" : "lg:w-auto lg:opacity-100"
            )}>
              <p className="text-sm font-medium whitespace-nowrap">John Doe</p>
              <p className="text-xs text-muted-foreground capitalize whitespace-nowrap">{userRole}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
