export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Cost Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know the exact cost of every{" "}
          <span className="text-[#58a6ff]">AI-driven outcome</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Log prompts with business context — lead gen, support, sales — and see real cost-per-conversion across OpenAI, Anthropic, and every model you run.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $29/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card required to explore.</p>

        <div className="grid grid-cols-3 gap-4 mt-14 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">$0.003</div>
            <div className="text-xs text-[#8b949e] mt-1">avg cost per lead</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">12x</div>
            <div className="text-xs text-[#8b949e] mt-1">ROI visibility</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">5+</div>
            <div className="text-xs text-[#8b949e] mt-1">AI providers tracked</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, flat pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">/month per workspace</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Unlimited prompt logs</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Cost-per-conversion dashboard</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>OpenAI, Anthropic, Gemini &amp; more</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Business context tagging</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Spending trend reports</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>REST API &amp; webhook support</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-5">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which AI providers are supported?</h3>
            <p className="text-[#8b949e] text-sm">OpenAI, Anthropic, Google Gemini, Mistral, Cohere, and any custom model — you define the cost-per-token and we handle the math.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How do I tag prompts with business context?</h3>
            <p className="text-[#8b949e] text-sm">Send a simple API call with your prompt metadata and a context tag (e.g. "lead-gen", "support", "onboarding"). The dashboard groups costs and conversions by tag automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel from your billing portal with one click. You keep access until the end of your billing period — no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} PromptROI. All rights reserved.
      </footer>
    </main>
  )
}
