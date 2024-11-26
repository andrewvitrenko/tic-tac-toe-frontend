import Link from 'next/link';
import { FC } from 'react';

import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';

import { LoginForm } from './ui/form';

export const LoginPage: FC = () => {
  return (
    <div className="flex size-full items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Log in the system to use the app</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm">
            Don&#39;t have an account yet?{' '}
            <Button className="px-2" variant="link">
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
