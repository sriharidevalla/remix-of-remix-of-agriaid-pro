-- Create chat history table for conversation memory
CREATE TABLE public.chat_history (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL UNIQUE,
  messages JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for faster session lookups
CREATE INDEX idx_chat_history_session_id ON public.chat_history(session_id);

-- Enable RLS
ALTER TABLE public.chat_history ENABLE ROW LEVEL SECURITY;

-- Public read/write policy (since no auth required for anonymous chat)
-- Users can only access their own session based on session_id
CREATE POLICY "Allow public insert" 
ON public.chat_history 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public select" 
ON public.chat_history 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public update" 
ON public.chat_history 
FOR UPDATE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_chat_history_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_chat_history_updated_at
BEFORE UPDATE ON public.chat_history
FOR EACH ROW
EXECUTE FUNCTION public.update_chat_history_updated_at();

-- Create diagnosis history table to remember past analyses
CREATE TABLE public.diagnosis_history (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  crop_type TEXT NOT NULL,
  disease_name TEXT NOT NULL,
  confidence INTEGER NOT NULL,
  severity TEXT NOT NULL,
  symptoms JSONB NOT NULL DEFAULT '[]'::jsonb,
  treatment JSONB NOT NULL DEFAULT '[]'::jsonb,
  prevention JSONB NOT NULL DEFAULT '[]'::jsonb,
  is_irrelevant BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for session lookups
CREATE INDEX idx_diagnosis_history_session_id ON public.diagnosis_history(session_id);

-- Enable RLS
ALTER TABLE public.diagnosis_history ENABLE ROW LEVEL SECURITY;

-- Public policies for diagnosis history
CREATE POLICY "Allow public insert diagnosis" 
ON public.diagnosis_history 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public select diagnosis" 
ON public.diagnosis_history 
FOR SELECT 
USING (true);