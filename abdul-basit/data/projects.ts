import projectsData from '@/data/projects.json' assert { type: 'json' };
import type { Project } from '@/lib/data';

export const projects: Project[] = projectsData as Project[];
