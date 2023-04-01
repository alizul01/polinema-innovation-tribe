#!/usr/bin/env bash

 pnpm openapi-typescript $(grep NEXT_PUBLIC_SUPABASE_URL .env | cut -d '=' -f2)/rest/v1/?apikey=$(grep NEXT_PUBLIC_SUPABASE_ANON_KEY .env | cut -d '=' -f2) --output generated-types.ts