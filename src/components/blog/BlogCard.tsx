import { CalendarDays, Clock, User } from 'lucide-react';
import { format } from 'date-fns';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface BlogPost {
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  excerpt: string;
  tags: string[];
  image: string;
  readingTime: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      
      <CardHeader>
        <div className="flex gap-2 mb-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-xl hover:text-blue-600 transition-colors">
          <a href={`/blog/${post.slug}`}>{post.title}</a>
        </CardTitle>
        <CardDescription>{post.excerpt}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            {format(new Date(post.date), 'MMM d, yyyy')}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readingTime}
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="font-medium">{post.author.name}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}