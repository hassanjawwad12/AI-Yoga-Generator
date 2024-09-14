import supabase from "../database/supabase"

export const isAuthenticated = async () =>
{
    const {data, error} = await supabase.auth.getSession() || null;
    return error ? null : data?.session?.access_token || null;
}

export const endSession = async () =>
{
    await supabase.auth.signOut();
    window.location.href = '/login';
}

export const getUserId = async () =>
{
    const {data, error} = await supabase.auth.getUser();
    return error ? null : data?.user?.id || null;
}

export const getSequenceCount = async () => {
    const uuid = await getUserId();
    const {data, error} = await supabase
        .from('Customers')
        .select('*')
        .eq('id', uuid);
    const sequences_available = data[0]?.sequences_available;
    if(error) return null;
    return sequences_available;
}

export const getHistory = async () => {
    const uuid = await getUserId();
    const response = await fetch(`${import.meta.env.VITE_API}fetch_history`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            uuid: uuid,
        }),
    });
    const data = await response.json();2
    console.log(data);
    return data || null;
}

export const getPlan = async () => {
    const uuid = await getUserId();
    const {data, error} = await supabase
        .from('Customers')
        .select('*')
        .eq('id', uuid);
    if(error) return null;
    return data[0]?.plan;
}

export const addFeedback = async (feedback, sequenceid) => {
    console.log(feedback, sequenceid);
    // convert sequence id to int
    sequenceid = parseInt(sequenceid);
    // convert feedback to string
    feedback = feedback.toString();
    const {error} = await supabase.from('feedback').insert([
        {id: sequenceid}, {feedback: feedback}
    ]);
    
    if(error) return null;
    return true;
}