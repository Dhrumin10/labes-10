import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  status: string;
  tech: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}