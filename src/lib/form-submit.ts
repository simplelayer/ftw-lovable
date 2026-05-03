import { supabase } from './supabase';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

type FormType = 'contact' | 'scorecard' | 'site_score' | 'affiliate' | 'events' | 'charger';

interface SubmitResult {
  success: boolean;
  message?: string;
}

export async function submitForm(
  table: string,
  formType: FormType,
  row: Record<string, unknown>,
  ghlData: Record<string, string>,
): Promise<SubmitResult> {
  const { error: insertError } = await supabase.from(table).insert(row);

  if (insertError) {
    if (insertError.code === '42501') {
      return { success: false, message: 'Too many requests. Please try again in a few minutes.' };
    }
    return { success: false, message: 'Please try again shortly.' };
  }

  try {
    await fetch(`${SUPABASE_URL}/functions/v1/ghl-forwarder`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type: formType, data: ghlData }),
    });
  } catch {
    // GHL forwarding is best-effort; the DB insert succeeded
  }

  return { success: true };
}
