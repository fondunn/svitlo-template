import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import bcrypt from 'bcrypt';

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const body = await request.json();
    if (body.password) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(body.password, saltRounds);
      body.password = hashedPassword;
      const response = NextResponse.next();
      response.headers.set('x-modified-body', JSON.stringify(body));
      return response;
    }
  }
  return NextResponse.next();
}