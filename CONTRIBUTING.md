# Contributing to OpenBento 🚀

Thanks for your interest in contributing! OpenBento is community-driven. Adding a new widget takes ~15 minutes.

## 🎯 The 3-Step Process

### 1. Create Your Widget
Add a new file in `app/components/widgets/YourWidget.tsx`.

**Template:**
```tsx
import { Card } from '../ui/card';
import { YourIcon } from 'lucide-react';

export function YourWidget() {
  return (
    <Card>
      <h3 className="font-semibold mb-4">Your Widget</h3>
      {/* Your Tailwind magic here */}
    </Card>
  );
}
```

**Sizes:** `1x1`, `2x1`, `2x2` - keep it beautiful!

### 2. Register It
Add to `app/data/dashboard-config.ts`:

```ts
{
  id: 'your-widget',
  size: '1x1',
  component: () => import('../components/widgets/YourWidget').then(m => m.YourWidget),
}
```

### 3. Submit PR
- Add screenshot of your widget in action
- Test locally with `npm run dev`
- PR title: `feat: Add [Your Widget Name]`

## 🎨 Design Guidelines
- Use Tailwind + Lucide icons
- Glassmorphism style (zinc-900, rounded-3xl)
- Smooth Framer Motion hovers
- Responsive + dark mode

## 🤝 Hall of Fame
Your GitHub avatar will appear in README after merge!

**Questions?** [@yourusername](https://github.com/yourusername)

Happy contributing! ✨

## 🛠 Beginner Contributor Challenges (The "First PR" Path)
We have intentionally left a few "learning bugs" in the code to help you get familiar with the OpenBento architecture. These are great for first-time contributors! Please tackle them in order:

🟢 Level 1: The Personal Dashboard ("pers") UI Fix
Location: src/data/dashboard-config.ts & src/pages/Home.tsx

The Issue: The "Personal" dashboard (identified by the key pers) is currently causing a TypeScript indexing error.
The Challenge:

Navigate to the Home component.

You'll notice dashboardConfigs[currentKey] throws a type error because the keys aren't mapped strictly.

Goal: Fix the TypeScript mapping so that the "Personal" dashboard can be accessed without using any.

Bonus: Ensure the "Download" button in this view uses the correct theme colors.

🔵 Level 2: The Social Dashboard ("soci") Component Bug
Location: src/components/widgets/social/TwitterFeed.tsx

The Issue: When navigating to the "Social" dashboard, the app crashes with:

Element type is invalid: ... got: undefined. Check the render method of TwitterFeed.

The Challenge:

This is a classic Export/Import mismatch.

Investigate how TwitterFeed is exported and how it is being imported into the social-dashboard.tsx or the main config.

Goal: Fix the import/export syntax (Named vs. Default) so the Twitter Feed widget renders correctly.

📝 Commit & PR Guidelines
To keep our history clean and help me review your "Challenge" PRs, please follow these rules:

1. Branch Naming
For the Personal Dashboard fix: git checkout -b challenge/fix-pers-types

For the Social Dashboard fix: git checkout -b challenge/fix-soci-render

2. Commit Messages
We follow a simplified Conventional Commits format. Please use:

fix(pers): resolve typescript indexing for personal dashboard

fix(soci): correct TwitterFeed import/export mismatch

3. Pull Request Description
When you open your PR, please include:

The "Why": Briefly explain why the error was happening (e.g., "The component was exported as a named constant but imported as a default export").

The "How": What steps did you take to verify the fix?

Why this order matters:
The "pers" fix gets them looking at your TypeScript logic and how you've structured the dashboard configuration.

The "soci" fix gets them deeper into the component folder structure, forcing them to look at how widgets are actually built and exported.


