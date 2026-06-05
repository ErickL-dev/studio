'use server';
/**
 * @fileOverview A Genkit flow for the Kuro Style Matcher AI, recommending products based on user style preferences or occasions.
 *
 * - kuroStyleMatcher - A function that handles the product recommendation process.
 * - KuroStyleMatcherInput - The input type for the kuroStyleMatcher function.
 * - KuroStyleMatcherOutput - The return type for the kuroStyleMatcher function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const KuroStyleMatcherInputSchema = z.object({
  stylePreference: z
    .string()
    .describe("A description of the user's style preferences or the occasion they are styling for."),
});
export type KuroStyleMatcherInput = z.infer<typeof KuroStyleMatcherInputSchema>;

const KuroStyleMatcherOutputSchema = z.object({
  message: z.string().describe('A friendly message accompanying the recommendations.'),
  recommendations: z
    .array(z.string())
    .describe('A list of recommended product types or specific product names from the Kuro Supply catalog.'),
});
export type KuroStyleMatcherOutput = z.infer<typeof KuroStyleMatcherOutputSchema>;

export async function kuroStyleMatcher(input: KuroStyleMatcherInput): Promise<KuroStyleMatcherOutput> {
  return kuroStyleMatcherFlow(input);
}

const prompt = ai.definePrompt({
  name: 'kuroStyleMatcherPrompt',
  input: {schema: KuroStyleMatcherInputSchema},
  output: {schema: KuroStyleMatcherOutputSchema},
  prompt: `You are the 'Kuro Style Matcher' AI for Kuro Supply, a streetwear brand known for its urban aesthetic. Your task is to recommend suitable products from our catalog based on the customer's style preferences or occasion.
Our main product categories are Calzado (Footwear), Ropa (Apparel), and Accesorios (Accessories). We focus on a modern, high-contrast, industrial, and premium dark streetwear vibe.

When recommending, consider the latest streetwear trends, Kuro Supply's unique aesthetic, and try to provide specific examples or types of products that would fit.

Customer's style/occasion: {{{stylePreference}}}

Based on this, recommend items that would best match their aesthetic. Your recommendations should be concise and focused on product types or examples that fit the Kuro Supply brand.`,
});

const kuroStyleMatcherFlow = ai.defineFlow(
  {
    name: 'kuroStyleMatcherFlow',
    inputSchema: KuroStyleMatcherInputSchema,
    outputSchema: KuroStyleMatcherOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
