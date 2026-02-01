-- =========================================
-- SECURITY FIX: Add user authentication and restrict data access
-- =========================================

-- Step 1: Add user_id column to both tables for authenticated user data
ALTER TABLE public.chat_history 
ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE public.diagnosis_history 
ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

-- Step 2: Drop all overly permissive policies on chat_history
DROP POLICY IF EXISTS "Allow insert chat sessions" ON public.chat_history;
DROP POLICY IF EXISTS "Allow public insert" ON public.chat_history;
DROP POLICY IF EXISTS "Allow public select" ON public.chat_history;
DROP POLICY IF EXISTS "Allow public update" ON public.chat_history;
DROP POLICY IF EXISTS "Allow select chat sessions" ON public.chat_history;

-- Step 3: Drop all overly permissive policies on diagnosis_history
DROP POLICY IF EXISTS "Allow insert diagnosis" ON public.diagnosis_history;
DROP POLICY IF EXISTS "Allow public insert diagnosis" ON public.diagnosis_history;
DROP POLICY IF EXISTS "Allow public select diagnosis" ON public.diagnosis_history;
DROP POLICY IF EXISTS "Allow select diagnosis" ON public.diagnosis_history;

-- Step 4: Create secure RLS policies for chat_history (authenticated users only)
CREATE POLICY "Users can view their own chat history"
ON public.chat_history
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own chat history"
ON public.chat_history
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own chat history"
ON public.chat_history
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Step 5: Create secure RLS policies for diagnosis_history (authenticated users only)
CREATE POLICY "Users can view their own diagnoses"
ON public.diagnosis_history
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own diagnoses"
ON public.diagnosis_history
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Note: No UPDATE/DELETE policies - diagnosis records are immutable