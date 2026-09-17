import { useState } from 'react';
import * as Icons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { SkillItem } from '../types';

type Props = {
  skill: Pick<SkillItem, 'name' | 'logo' | 'iconName' | 'brandColor' | 'invertOnDark'>;
  size?: number;
  className?: string;
};

/**
 * Renders a brand logo from the Devicon CDN, and falls back to a lucide icon
 * when the skill has no logo or the image fails to load (offline, blocked CDN).
 */
export function SkillLogo({ skill, size = 24, className = '' }: Props) {
  const [failed, setFailed] = useState(false);
  const showImage = skill.logo && !failed;

  if (showImage) {
    return (
      <img
        src={skill.logo}
        alt={`${skill.name} logo`}
        width={size}
        height={size}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`shrink-0 object-contain ${skill.invertOnDark ? 'dark:invert' : ''} ${className}`}
      />
    );
  }

  const name = (skill.iconName ?? 'Sparkles') as keyof typeof Icons;
  const Fallback = (Icons[name] ?? Icons.Sparkles) as React.ComponentType<LucideProps>;

  return (
    <Fallback
      size={size}
      strokeWidth={1.75}
      aria-hidden
      className={`shrink-0 ${className}`}
      color={skill.brandColor}
    />
  );
}

/** Example usage inside a skill card. */
export function SkillCard({ skill }: { skill: SkillItem }) {
  return (
    <div
      className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3"
      style={skill.highlight ? { borderColor: skill.brandColor } : undefined}
    >
      <span
        className="flex h-10 w-10 items-center justify-center rounded-lg"
        style={{ backgroundColor: `${skill.color}40` }}
      >
        <SkillLogo skill={skill} size={22} />
      </span>
      <span className="min-w-0">
        <span className="block truncate font-medium text-neutral-900">{skill.name}</span>
        <span className="block truncate text-sm text-neutral-500">{skill.level}</span>
      </span>
    </div>
  );
}