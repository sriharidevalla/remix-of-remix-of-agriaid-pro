-- Drop the overly permissive policies
DROP POLICY IF EXISTS "Allow public insert " ON public.chat_history;
DROP POLICY IF EXISTS "Allow public select " ON public.chat_history;
DROP POLICY IF EXISTS "Allow public update " ON public.chat_history;

-- Create more restrictive policies
-- INSERT: Allow creating new chat sessions (needed for app to function)
CREATE POLICY "Allow insert chat sessions"
ON public.chat_history
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- SELECT: Allow reading chat sessions (needed for app to function)
-- Note: For full security, authentication should be implemented
CREATE POLICY "Allow select chat sessions"
ON public.chat_history
FOR SELECT
TO anon, authenticated
USING (true);

-- REMOVED: No UPDATE policy - prevents tampering with chat history
-- This addresses the "Users Can Tamper With or Delete Other Users' Chat History" issue

-- Also fix diagnosis_history table to be consistent
DROP POLICY IF EXISTS "Allow public insert diagnosis " ON public.diagnosis_history;
DROP POLICY IF EXISTS "Allow public select diagnosis " ON public.diagnosis_history;

CREATE POLICY "Allow insert diagnosis"
ON public.diagnosis_history
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Allow select diagnosis"
ON public.diagnosis_history
FOR SELECT
TO anon, authenticated
USING (true);