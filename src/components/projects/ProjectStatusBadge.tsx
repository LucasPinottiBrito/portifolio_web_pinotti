import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, CheckCircle2, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectStatusBadgeProps {
  status: string;
  confidential?: boolean;
}

export function ProjectStatusBadge({ status, confidential }: ProjectStatusBadgeProps) {
  const { language } = useLanguage();
  
  const isConfidential = confidential || status.toLowerCase().includes('internal') || status.toLowerCase().includes('confidencial');

  return (
    <div className="flex items-center gap-2">
      <Badge variant="outline" className="text-[10px] font-mono uppercase tracking-tighter">
        {status.split('/')[0].trim()}
      </Badge>
      {isConfidential && (
        <Badge className="bg-amber-500/90 text-white border-none backdrop-blur-sm text-[10px] py-0">
          <ShieldCheck className="h-3 w-3 mr-1" />
          {language === 'en' ? 'Confidential' : 'Confidencial'}
        </Badge>
      )}
    </div>
  );
}
