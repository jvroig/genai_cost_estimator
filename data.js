const tableData = {
    "OpenAI": {
        "GPT-3.5 Turbo 16K": {
            "Region": "Global",
            "InputRateTokens": 0.001000,
            "OutputRateTokens": 0.002000,
            "InputRateChars": 0.001333,
            "OutputRateChars": 0.002667,
            "TransactionRate": '',
        },
        "GPT-3.5 Turbo Instruct 4K": {
            "Region": "Global",
            "InputRateTokens": 0.001500,
            "OutputRateTokens": 0.002000,
            "InputRateChars": 0.002000,
            "OutputRateChars": 0.002667,
            "TransactionRate": '',
        },
        "GPT-3.5 Turbo 4K Fine-Tuned": {
            "Region": "Global",
            "InputRateTokens": 0.003000,
            "OutputRateTokens": 0.006000,
            "InputRateChars": 0.004000,
            "OutputRateChars": 0.008000,
            "TransactionRate": '',
        },
        "GPT-4 8K": {
            "Region": "Global",
            "InputRateTokens": 0.030000,
            "OutputRateTokens": 0.060000,
            "InputRateChars": 0.040000,
            "OutputRateChars": 0.080000,
            "TransactionRate": '',
        },
        "GPT-4 32K": {
            "Region": "Global",
            "InputRateTokens": 0.060000,
            "OutputRateTokens": 0.120000,
            "InputRateChars": 0.080000,
            "OutputRateChars": 0.160000,
            "TransactionRate": '',
        },
        "GPT-4 Turbo 128K Preview": {
            "Region": "Global",
            "InputRateTokens": 0.010000,
            "OutputRateTokens": 0.030000,
            "InputRateChars": 0.013333,
            "OutputRateChars": 0.040000,
            "TransactionRate": '',
        },
        "GPT-4 Turbo Vision 128K Preview": {
            "Region": "Global",
            "InputRateTokens": 0.010000,
            "OutputRateTokens": 0.030000,
            "InputRateChars": 0.013333,
            "OutputRateChars": 0.040000,
            "TransactionRate": '',
        },
    },
    "Amazon Bedrock": {
        "AI21 Jurassic-2 Mid": {
            "Region": "Global",
            "InputRateTokens": 0.012500,
            "OutputRateTokens": 0.012500,
            "InputRateChars": 0.016667,
            "OutputRateChars": 0.016667,
            "TransactionRate": '',
        },
        "AI21 Jurassic-2 Ultra": {
            "Region": "Global",
            "InputRateTokens": 0.018800,
            "OutputRateTokens": 0.018800,
            "InputRateChars": 0.025067,
            "OutputRateChars": 0.025067,
            "TransactionRate": '',
        },
        "Amazon Titan Text - Lite": {
            "Region": "Global",
            "InputRateTokens": 0.000300,
            "OutputRateTokens": 0.000400,
            "InputRateChars": 0.000400,
            "OutputRateChars": 0.000533,
            "TransactionRate": '',
        },
        "Amazon Titan Text  Express": {
            "Region": "Global",
            "InputRateTokens": 0.001300,
            "OutputRateTokens": 0.001700,
            "InputRateChars": 0.001733,
            "OutputRateChars": 0.002267,
            "TransactionRate": '',
        },
        "Anthropic Claude Instant": {
            "Region": "Global",
            "InputRateTokens": 0.001630,
            "OutputRateTokens": 0.005510,
            "InputRateChars": 0.002173,
            "OutputRateChars": 0.007347,
            "TransactionRate": '',
        },
        "Anthropic Claude 2": {
            "Region": "Global",
            "InputRateTokens": 0.011020,
            "OutputRateTokens": 0.032680,
            "InputRateChars": 0.014693,
            "OutputRateChars": 0.043573,
            "TransactionRate": '',
        },
        "Cohere Command": {
            "Region": "Global",
            "InputRateTokens": 0.001500,
            "OutputRateTokens": 0.002000,
            "InputRateChars": 0.002000,
            "OutputRateChars": 0.002667,
            "TransactionRate": '',
        },
        "Cohere Command-Light": {
            "Region": "Global",
            "InputRateTokens": 0.000300,
            "OutputRateTokens": 0.000600,
            "InputRateChars": 0.000400,
            "OutputRateChars": 0.000800,
            "TransactionRate": '',
        },
        "Meta Llama 2 Chat (13B)": {
            "Region": "Global",
            "InputRateTokens": 0.000750,
            "OutputRateTokens": 0.001000,
            "InputRateChars": 0.001000,
            "OutputRateChars": 0.001333,
            "TransactionRate": '',
        },
    },
    "Cohere": {
        "Cohere Command": {
            "Region": "Global",
            "InputRateTokens": 0.001500,
            "OutputRateTokens": 0.002000,
            "InputRateChars": 0.002000,
            "OutputRateChars": 0.002667,
            "TransactionRate": '',
        },
    },
    "Google Cloud Vertex AI": {
        "PaLM 2 for Text": {
            "Region": "Global",
            "InputRateTokens": 0.000375,
            "OutputRateTokens": 0.000375,
            "InputRateChars": 0.000500,
            "OutputRateChars": 0.000500,
            "TransactionRate": '',
        },
        "PalM 2 for Chat": {
            "Region": "Global",
            "InputRateTokens": 0.000375,
            "OutputRateTokens": 0.000375,
            "InputRateChars": 0.000500,
            "OutputRateChars": 0.000500,
            "TransactionRate": '',
        },
        "Codey for Code Generation": {
            "Region": "Global",
            "InputRateTokens": 0.000375,
            "OutputRateTokens": 0.000375,
            "InputRateChars": 0.000500,
            "OutputRateChars": 0.000500,
            "TransactionRate": '',
        },
        "Codey for Code Chat": {
            "Region": "Global",
            "InputRateTokens": 0.000375,
            "OutputRateTokens": 0.000375,
            "InputRateChars": 0.000500,
            "OutputRateChars": 0.000500,
            "TransactionRate": '',
        },
        "Codey for Code Completion": {
            "Region": "Global",
            "InputRateTokens": 0.000375,
            "OutputRateTokens": 0.000375,
            "InputRateChars": 0.000500,
            "OutputRateChars": 0.000500,
            "TransactionRate": '',
        },
    },
    "Azure OpenAI Service": {
        "GPT-3.5 Turbo 4K": {
            "Region": "Global",
            "InputRateTokens": 0.001500,
            "OutputRateTokens": 0.002000,
            "InputRateChars": 0.002000,
            "OutputRateChars": 0.002667,
            "TransactionRate": '',
        },
        "GPT-3.5 Turbo 16K": {
            "Region": "Global",
            "InputRateTokens": 0.003000,
            "OutputRateTokens": 0.004000,
            "InputRateChars": 0.004000,
            "OutputRateChars": 0.005333,
            "TransactionRate": '',
        },
        "GPT-4 8K": {
            "Region": "Global",
            "InputRateTokens": 0.030000,
            "OutputRateTokens": 0.060000,
            "InputRateChars": 0.040000,
            "OutputRateChars": 0.080000,
            "TransactionRate": '',
        },
        "GPT-4 32K": {
            "Region": "Global",
            "InputRateTokens": 0.060000,
            "OutputRateTokens": 0.120000,
            "InputRateChars": 0.080000,
            "OutputRateChars": 0.160000,
            "TransactionRate": '',
        },
    },
    "Anthropic": {
        "Claude Instant": {
            "Region": "Global",
            "InputRateTokens": 0.001630,
            "OutputRateTokens": 0.005510,
            "InputRateChars": 0.002173,
            "OutputRateChars": 0.007347,
            "TransactionRate": '',
        },
        "Claude 2": {
            "Region": "Global",
            "InputRateTokens": 0.011020,
            "OutputRateTokens": 0.032680,
            "InputRateChars": 0.014693,
            "OutputRateChars": 0.043573,
            "TransactionRate": '',
        },
    },
    "Oracle Cloud": {
        "Cohere Command": {
            "Region": "Global",
            "InputRateTokens": 0.00,
            "OutputRateTokens": 0.00,
            "InputRateChars": 0.00,
            "OutputRateChars": 0.00,
            "TransactionRate": 0.25,
        },
    },
};

const instanceData = {
    "AWS": {
        "Sagemaker": {
            "ml.g5.2xlarge": {
                "vCPU": 8,
                "RAM": 32,
                "GPU": 1,
                "VRAM": 24,
                "GPUType": "A10G"
            },
            "ml.g5.12xlarge": {
                "vCPU": 48,
                "RAM": 192,
                "GPU": 4,
                "VRAM": 96,
                "GPUType": "A10G"
            },
            "ml.g5.48xlarge": {
                "vCPU": 192,
                "RAM": 768,
                "GPU": 8,
                "VRAM": 192,
                "GPUType": "A10G"
            },
        }
    }
};

//Globals for computations
const hrsPerDay       = 24;
const daysInMonth     = 30;
const tokenBillingDiv = 1000; //The divisior is 1,000 because token costing is per 1000 tokens

