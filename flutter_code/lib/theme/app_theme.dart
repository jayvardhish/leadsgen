import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

// ─────────────────────────────────────────────
//  APP COLORS & THEME CONSTANTS
// ─────────────────────────────────────────────

const kYellow = Color(0xFFFFFF00);
const kBlack  = Color(0xFF0B0B0B);
const kBg     = Color(0xFFFAFAFB);
const kWhite  = Color(0xFFFFFFFF);
const kGrey   = Color(0xFF6B7280);
const kGreyLight = Color(0xFFE5E7EB);
const kGreen  = Color(0xFF059669);
const kRed    = Color(0xFFEF4444);
const kBlue   = Color(0xFF2563EB);
const kPurple = Color(0xFF9333EA);

// ─────────────────────────────────────────────
//  TEXT STYLES
// ─────────────────────────────────────────────

TextStyle kHeading(double size, {Color color = kBlack, FontWeight weight = FontWeight.w900}) =>
    GoogleFonts.inter(fontSize: size, fontWeight: weight, color: color);

TextStyle kBody(double size, {Color color = kGrey, FontWeight weight = FontWeight.w500}) =>
    GoogleFonts.inter(fontSize: size, fontWeight: weight, color: color);

// ─────────────────────────────────────────────
//  REUSABLE WIDGETS
// ─────────────────────────────────────────────

/// Big yellow pill button
class PrimaryButton extends StatelessWidget {
  final String label;
  final VoidCallback? onTap;
  final IconData? icon;
  final bool isLoading;

  const PrimaryButton({
    Key? key,
    required this.label,
    this.onTap,
    this.icon,
    this.isLoading = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: isLoading ? null : onTap,
      child: Container(
        width: double.infinity,
        padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 24),
        decoration: BoxDecoration(
          color: kYellow,
          borderRadius: BorderRadius.circular(14),
          boxShadow: [BoxShadow(color: kYellow.withOpacity(0.35), blurRadius: 16, offset: const Offset(0, 6))],
        ),
        child: isLoading
            ? const Center(child: SizedBox(width: 22, height: 22, child: CircularProgressIndicator(color: kBlack, strokeWidth: 2.5)))
            : Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  if (icon != null) ...[Icon(icon, size: 18, color: kBlack), const SizedBox(width: 8)],
                  Text(label, style: kHeading(15, weight: FontWeight.w800)),
                ],
              ),
      ),
    );
  }
}

/// White card with shadow
class AppCard extends StatelessWidget {
  final Widget child;
  final EdgeInsets? padding;
  final Color color;
  final double radius;
  final Border? border;

  const AppCard({
    Key? key,
    required this.child,
    this.padding,
    this.color = kWhite,
    this.radius = 20,
    this.border,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: padding ?? const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: color,
        borderRadius: BorderRadius.circular(radius),
        border: border,
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.03), blurRadius: 16, offset: const Offset(0, 4))],
      ),
      child: child,
    );
  }
}

/// Yellow badge
Widget yellowBadge(String text, {Color bg = kYellow, Color textColor = kBlack}) => Container(
  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
  decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(8)),
  child: Text(text, style: kHeading(11, color: textColor, weight: FontWeight.w900)),
);

/// Status dot row
Widget statusDot(Color color, String label) => Row(
  children: [
    Container(width: 8, height: 8, decoration: BoxDecoration(color: color, shape: BoxShape.circle)),
    const SizedBox(width: 4),
    Text(label, style: kBody(12, color: color, weight: FontWeight.w700)),
  ],
);

/// Circular stats bubble
Widget statBubble(String value, String label, Color bg, Color textColor) => Column(
  children: [
    Container(
      width: 60,
      height: 60,
      decoration: BoxDecoration(color: bg, shape: BoxShape.circle),
      child: Center(child: Text(value, style: kHeading(15, color: textColor))),
    ),
    const SizedBox(height: 6),
    Text(label, style: kBody(10, color: kBlack, weight: FontWeight.w700), textAlign: TextAlign.center),
  ],
);
