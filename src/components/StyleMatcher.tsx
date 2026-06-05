
"use client"

import React, { useState } from 'react';
import { kuroStyleMatcher, KuroStyleMatcherOutput } from '@/ai/flows/kuro-style-matcher-flow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Loader2, SendHorizontal } from 'lucide-react';

export function StyleMatcher() {
  const [preference, setPreference] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<KuroStyleMatcherOutput | null>(null);

  const handleMatch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!preference.trim()) return;

    setLoading(true);
    try {
      const output = await kuroStyleMatcher({ stylePreference: preference });
      setResult(output);
    } catch (error) {
      console.error('Style Matching Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-secondary/30 border-primary/20 backdrop-blur-sm overflow-hidden industrial-grid">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 font-headline uppercase text-xl text-primary italic">
          <Sparkles className="w-5 h-5" />
          Kuro Style Matcher
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Tell us the vibe or occasion, and our AI will architect your perfect drop.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleMatch} className="flex gap-2">
          <Input
            value={preference}
            onChange={(e) => setPreference(e.target.value)}
            placeholder="e.g. Night operation in rainy Trujillo, techwear vibe..."
            className="bg-background/50 border-white/10 focus-visible:ring-primary h-12"
          />
          <Button 
            disabled={loading} 
            type="submit" 
            className="bg-primary text-black font-headline font-bold h-12 px-6"
          >
            {loading ? <Loader2 className="animate-spin" /> : <SendHorizontal />}
          </Button>
        </form>

        {result && (
          <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-500">
            <div className="p-4 bg-primary/10 border-l-4 border-primary rounded-r-md">
              <p className="text-sm font-medium leading-relaxed italic">
                "{result.message}"
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {result.recommendations.map((item, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-headline uppercase tracking-tighter">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
