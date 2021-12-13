// HACK: Tailwind doesn't like that I use interpolated strings for some classnames. All classes must be present
// somewhere in the code in their entirety to be correctly generated. And that's what this file is for.

// List of classes to manually generate. Try to keep this relatively up-to-date to reduce generated css size.
export default [
    'card-border-none',
    'card-border-accent-bottom',
    'card-halign-none',
    'card-halign-center',
    'card-img-medium',
    'card-padding-xs',
    'card-padding-sm',
    'card-padding-md',
    'card-padding-xl',
    'card-valign-none',
    'card-valign-center',
    'rounded-sm',
    'rounded-xl',
    'rounded-t-md',
    'shadow-top',
    'shadow-top-under',
];
