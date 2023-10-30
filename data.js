const tableData = {
    "OpenAI": {
        "GPT-4 8K": {
            "Region": "Global",
            "InputRateTokens": 0.030000,
            "OutputRateTokens": 0.060000,
            "InputRateChars": 0.040000,
            "OutputRateChars": 0.080000
        },
        "GPT-4 32K": {
            "Region": "Global",
            "InputRateTokens": 0.060000,
            "OutputRateTokens": 0.120000,
            "InputRateChars": 0.080000,
            "OutputRateChars": 0.160000
        },
        "GPT-3.5 Turbo 4K": {
            "Region": "Global",
            "InputRateTokens": 0.001500,
            "OutputRateTokens": 0.002000,
            "InputRateChars": 0.002000,
            "OutputRateChars": 0.002667
        },
        "GPT-3.5 Turbo 16K": {
            "Region": "Global",
            "InputRateTokens": 0.003000,
            "OutputRateTokens": 0.004000,
            "InputRateChars": 0.004000,
            "OutputRateChars": 0.005333
        },
        "GPT-3.5 Turbo 4K Fine-Tuned": {
            "Region": "Global",
            "InputRateTokens": 0.012000,
            "OutputRateTokens": 0.016000,
            "InputRateChars": 0.016000,
            "OutputRateChars": 0.021333
        },
    },
    "Amazon Bedrock": {
        "AI21 Jurassic-2 Mid": {
            "Region": "Global",
            "InputRateTokens": 0.012500,
            "OutputRateTokens": 0.012500,
            "InputRateChars": 0.016667,
            "OutputRateChars": 0.016667
        },
        "AI21 Jurassic-2 Ultra": {
            "Region": "Global",
            "InputRateTokens": 0.018800,
            "OutputRateTokens": 0.018800,
            "InputRateChars": 0.025067,
            "OutputRateChars": 0.025067
        },
        "Amazon Titan Text – Lite": {
            "Region": "Global",
            "InputRateTokens": 0.000300,
            "OutputRateTokens": 0.000400,
            "InputRateChars": 0.000400,
            "OutputRateChars": 0.000533
        },
        "Amazon Titan Text – Express": {
            "Region": "Global",
            "InputRateTokens": 0.001300,
            "OutputRateTokens": 0.001700,
            "InputRateChars": 0.001733,
            "OutputRateChars": 0.002267
        },
        "Anthropic Claude Instant": {
            "Region": "Global",
            "InputRateTokens": 0.001630,
            "OutputRateTokens": 0.005510,
            "InputRateChars": 0.002173,
            "OutputRateChars": 0.007347
        },
        "Anthropic Claude 2": {
            "Region": "Global",
            "InputRateTokens": 0.011020,
            "OutputRateTokens": 0.032680,
            "InputRateChars": 0.014693,
            "OutputRateChars": 0.043573
        },
        "Cohere Command": {
            "Region": "Global",
            "InputRateTokens": 0.001500,
            "OutputRateTokens": 0.002000,
            "InputRateChars": 0.002000,
            "OutputRateChars": 0.002667
        },
    },
    "Cohere": {
        "Cohere Command": {
            "Region": "Global",
            "InputRateTokens": 0.001500,
            "OutputRateTokens": 0.002000,
            "InputRateChars": 0.002000,
            "OutputRateChars": 0.002667
        },
    },
    "Google Cloud Vertex AI": {
        "PaLM 2 for Text": {
            "Region": "Global",
            "InputRateTokens": 0.000375,
            "OutputRateTokens": 0.000375,
            "InputRateChars": 0.000500,
            "OutputRateChars": 0.000500
        },
        "PalM 2 for Chat": {
            "Region": "Global",
            "InputRateTokens": 0.000375,
            "OutputRateTokens": 0.000375,
            "InputRateChars": 0.000500,
            "OutputRateChars": 0.000500
        },
        "Codey for Code Generation": {
            "Region": "Global",
            "InputRateTokens": 0.000375,
            "OutputRateTokens": 0.000375,
            "InputRateChars": 0.000500,
            "OutputRateChars": 0.000500
        },
        "Codey for Code Chat": {
            "Region": "Global",
            "InputRateTokens": 0.000375,
            "OutputRateTokens": 0.000375,
            "InputRateChars": 0.000500,
            "OutputRateChars": 0.000500
        },
        "Codey for Code Completion": {
            "Region": "Global",
            "InputRateTokens": 0.000375,
            "OutputRateTokens": 0.000375,
            "InputRateChars": 0.000500,
            "OutputRateChars": 0.000500
        },
    },
    "Azure OpenAI Service": {
        "GPT-4 8K": {
            "Region": "Global",
            "InputRateTokens": 0.030000,
            "OutputRateTokens": 0.060000,
            "InputRateChars": 0.040000,
            "OutputRateChars": 0.080000
        },
        "GPT-4 32K": {
            "Region": "Global",
            "InputRateTokens": 0.060000,
            "OutputRateTokens": 0.120000,
            "InputRateChars": 0.080000,
            "OutputRateChars": 0.160000
        },
        "GPT-3.5 Turbo 4K": {
            "Region": "Global",
            "InputRateTokens": 0.001500,
            "OutputRateTokens": 0.002000,
            "InputRateChars": 0.002000,
            "OutputRateChars": 0.002667
        },
        "GPT-3.5 Turbo 16K": {
            "Region": "Global",
            "InputRateTokens": 0.003000,
            "OutputRateTokens": 0.004000,
            "InputRateChars": 0.004000,
            "OutputRateChars": 0.005333
        },
    },
    "Anthropic": {
        "Claude 2": {
            "Region": "Global",
            "InputRateTokens": 0.001630,
            "OutputRateTokens": 0.005510,
            "InputRateChars": 0.002173,
            "OutputRateChars": 0.007347
        },
        "Claude Instant": {
            "Region": "Global",
            "InputRateTokens": 0.011020,
            "OutputRateTokens": 0.032680,
            "InputRateChars": 0.014693,
            "OutputRateChars": 0.043573
        },
    },
};

const inputRateTokensGPT4_8K = tableData["OpenAI"]["GPT-4 8K"]["InputRateTokens"];
console.log('Input Rate Tokens for GPT-4 8K:', inputRateTokensGPT4_8K);
