const apiKey = import.meta.env.VITE_GOOGLE_API;

export const convertTextToVoice = async (text) => {
    const endpoint = `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${apiKey}`;

    const response = await fetch(endpoint, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            input: { text: text },
            "voice": {
                "languageCode": "en-IN",
                "name": "en-IN-Neural2-A"
            },
            "audioConfig": {
                "speakingRate": 0.81,
                "audioEncoding": "LINEAR16",
                "pitch": -3.6
            },
        }),
    });

    const data = await response.json();
    const audio = data.audioContent;
    return audio;
}