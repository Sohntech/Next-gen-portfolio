'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Project } from "@/lib/data/projects";
import Image from "next/image";
import { Button } from "./button";
import { ExternalLink } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[90vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
        </DialogHeader>
        
        <div className="relative h-[50vh] w-full rounded-lg overflow-hidden my-4">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-secondary px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {project.link && (
            <Button 
              className="w-full sm:w-auto group"
              onClick={() => window.open(project.link, '_blank')}
            >
              Visit Project
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}