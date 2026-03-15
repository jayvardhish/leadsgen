import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class BillingScreen extends StatelessWidget {
  const BillingScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF8F9FA),
      body: CustomScrollView(
        slivers: [
          // Top Bar
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(20, 52, 20, 16),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Icon(Icons.arrow_back, size: 24),
                  Text('Billing History', style: kHeading(18)),
                  const SizedBox(width: 24),
                ],
              ),
            ),
          ),

          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(20, 0, 20, 100),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // ── Plan Card ──
                  AppCard(
                    padding: EdgeInsets.zero,
                    child: Column(
                      children: [
                        // Yellow dotted section
                        Container(
                          height: 100,
                          width: double.infinity,
                          decoration: BoxDecoration(
                            color: const Color(0xFFFFFDE7),
                            borderRadius: const BorderRadius.vertical(top: Radius.circular(20)),
                          ),
                          child: Center(
                            child: Container(
                              width: 64, height: 64,
                              decoration: BoxDecoration(color: kYellow, shape: BoxShape.circle, boxShadow: [BoxShadow(color: kYellow.withOpacity(0.35), blurRadius: 16)]),
                              child: const Icon(Icons.auto_awesome, size: 28, color: kBlack),
                            ),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.all(24),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                children: [
                                  Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      Text('CURRENT PLAN', style: kBody(11, weight: FontWeight.w800)),
                                      Text('Growth Pro AI', style: kHeading(20)),
                                    ],
                                  ),
                                  Container(
                                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                                    decoration: BoxDecoration(color: kYellow, borderRadius: BorderRadius.circular(12)),
                                    child: Text('ACTIVE', style: kHeading(11, weight: FontWeight.w900)),
                                  ),
                                ],
                              ),
                              const SizedBox(height: 16),
                              RichText(
                                text: TextSpan(
                                  text: '\$49.00', style: kHeading(32),
                                  children: [TextSpan(text: '/month', style: kBody(14))],
                                ),
                              ),
                              const SizedBox(height: 10),
                              Row(
                                children: [
                                  const Icon(Icons.calendar_today, size: 16, color: kGrey),
                                  const SizedBox(width: 6),
                                  Text('Next renewal: Oct 12, 2023', style: kBody(14)),
                                ],
                              ),
                              const SizedBox(height: 24),
                              PrimaryButton(label: 'Manage Subscription', onTap: () {}),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),

                  const SizedBox(height: 28),

                  // ── Transactions Header ──
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text('Recent Transactions', style: kHeading(18)),
                      Text('View All', style: kHeading(14, color: const Color(0xFFE6E600), weight: FontWeight.w800)),
                    ],
                  ),

                  const SizedBox(height: 16),

                  // ── Transaction List ──
                  AppCard(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: Column(
                      children: [
                        _transRow('Sep 12, 2023', 'Paid', kGreen, Icons.receipt_long, '\$49.00', isPaid: true),
                        _divider(),
                        _transRow('Aug 12, 2023', 'Paid', kGreen, Icons.receipt_long, '\$49.00', isPaid: true),
                        _divider(),
                        _transRow('Jul 12, 2023', 'Processing', const Color(0xFFEA580C), Icons.hourglass_empty, '\$49.00', isPaid: false, isProcessing: true),
                        _divider(),
                        _transRow('Jun 12, 2023', 'Paid', kGreen, Icons.receipt_long, '\$49.00', isPaid: true),
                      ],
                    ),
                  ),

                  const SizedBox(height: 24),

                  // ── Support Card ──
                  Container(
                    padding: const EdgeInsets.all(20),
                    decoration: BoxDecoration(
                      color: const Color(0xFFF8FAFC),
                      borderRadius: BorderRadius.circular(20),
                      border: Border.all(color: const Color(0xFFCBD5E1), style: BorderStyle.solid),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                          Text('Have questions?', style: kHeading(14, weight: FontWeight.w800)),
                          const SizedBox(height: 4),
                          Text('Contact our billing support team', style: kBody(12)),
                        ]),
                        ElevatedButton(
                          onPressed: () {},
                          style: ElevatedButton.styleFrom(
                            backgroundColor: kWhite,
                            foregroundColor: kBlack,
                            elevation: 0,
                            side: const BorderSide(color: Color(0xFFE2E8F0)),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                          ),
                          child: Text('Get Help', style: kHeading(13, weight: FontWeight.w800)),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  static Widget _divider() => Divider(color: const Color(0xFFF3F4F6), height: 1, thickness: 1);

  static Widget _transRow(String date, String status, Color statusColor, IconData icon, String amount, {bool isPaid = true, bool isProcessing = false}) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 18),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            children: [
              Container(
                width: 48, height: 48,
                decoration: BoxDecoration(color: isProcessing ? const Color(0xFFFFF3CD) : const Color(0xFFFFFDE7), shape: BoxShape.circle),
                child: Icon(icon, size: 20, color: isProcessing ? const Color(0xFFEA580C) : kBlack),
              ),
              const SizedBox(width: 14),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(date, style: kHeading(15, weight: FontWeight.w800)),
                  const SizedBox(height: 4),
                  Row(
                    children: [
                      Icon(Icons.circle, size: 8, color: statusColor),
                      const SizedBox(width: 4),
                      Text(status, style: kBody(12, color: statusColor, weight: FontWeight.w700)),
                    ],
                  ),
                ],
              ),
            ],
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text(amount, style: kHeading(15, color: isProcessing ? kGrey : kBlack, weight: FontWeight.w900)),
              const SizedBox(height: 4),
              Row(
                children: [
                  Icon(isProcessing ? Icons.remove_red_eye : Icons.download, size: 12, color: kGrey),
                  const SizedBox(width: 4),
                  Text(isProcessing ? 'View' : 'PDF', style: kBody(12, weight: FontWeight.w700)),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }
}
