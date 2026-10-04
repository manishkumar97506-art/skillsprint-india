import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Layers, ArrowRight, Clock } from 'lucide-react';
import { Course } from '../types';
import { trackEvent } from '../utils/analytics';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const handleClick = () => {
    trackEvent('course_card_click', {
      courseId: course.id,
      courseTitle: course.title,
      category: course.category,
    });
  };

  return (
    <div className="group flex flex-col bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      
      {/* Course Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-900/80 text-white backdrop-blur-md border border-white/10">
            {course.category}
          </span>
        </div>

        {/* Level Tag */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs text-white/90">
          <span className="flex items-center gap-1 bg-brand-blue-600/80 backdrop-blur-sm px-2 py-0.5 rounded-md font-medium">
            {course.level}
          </span>
          <span className="flex items-center gap-1 bg-slate-900/70 backdrop-blur-sm px-2 py-0.5 rounded-md">
            <Layers className="w-3.5 h-3.5 text-brand-cyan-400" />
            {course.modulesCount} Modules
          </span>
        </div>
      </div>

      {/* Course Details */}
      <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-blue-600 dark:group-hover:text-brand-cyan-400 transition-colors font-['Plus_Jakarta_Sans'] line-clamp-1">
            {course.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {course.shortDescription}
          </p>
        </div>

        {/* Topics Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {course.topics.slice(0, 3).map((topic, i) => (
            <span
              key={i}
              className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {topic}
            </span>
          ))}
          {course.topics.length > 3 && (
            <span className="text-[11px] text-slate-400 self-center">
              +{course.topics.length - 3} more
            </span>
          )}
        </div>

        {/* Card Footer / Action */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            <span>{course.lessonsCount} Lessons</span>
          </span>

          <Link
            to={`/courses/${course.slug}`}
            onClick={handleClick}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue-600 dark:text-brand-cyan-400 group-hover:translate-x-0.5 transition-transform"
          >
            <span>View Course</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

    </div>
  );
};
